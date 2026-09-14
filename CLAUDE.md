# rewind

Shared Waterline (Sails.js) model definitions for the LSS platform, backed by MySQL via `sails-mysql`. This is a model-only package: there is no server, no Sails app, no cron, and no entry point that runs anything. Each `*.js` at the repo root is one Waterline model definition (`module.exports = { ... }`).

## How it's consumed

`rewind` is a PRIVATE npm package (git dependency from `github.com/adviceinteractivegroup/rewind`). It is pulled into `node_modules/rewind` of the apps that use it and loaded at runtime:

- `~/warpath` (Sails API)
- `~/chronos` (background workers) — see `chronos.js`, which does `fs.readdirSync('./node_modules/rewind')`, `require`s each file, sets `identity = name.toLowerCase()`, and registers it with `Waterline.Collection.extend(...)`.
- `~/grimlock`

Because the model `identity` is the lowercased filename, `LegacyOrderProduct.js` is referenced in associations and queries as `legacyorderproduct`.

There are no build/run commands here. `package.json` defines only a placeholder `test` script (no real tests). The only workflow is editing model files and bumping `version` for consumers to pick up.

## ⚠️ Deploy ordering: push rewind BEFORE the apps that use it

Consumers depend on rewind as a **git dependency** (`package.json` → the bare repo URL, **no commit/branch pin**), and their `package-lock.json` is **gitignored/untracked**. So a fresh `npm install` on the build agent resolves to **rewind's `master` HEAD**. Therefore:

- **Always commit + push a model change to rewind `master` BEFORE building/deploying `warpath`, `chronos`, or `grimlock`.** Otherwise their build pulls the OLD models and ships stale schema or fails tests.
- Bump `version` per commit (convention; patch bump). It isn't required for resolution (there's no lock pin) but keeps history sane.
- There is no Jenkins job for rewind itself — it ships purely by being on `master` when a consumer builds.

## Recipe: adding a NEW MySQL-backed model

A new model that needs a real MySQL table (in `lss_prod` AND `lss_test`) MUST follow the **Legacy style**, NOT the bare non-Legacy style:

1. **Create the table in BOTH `lss_prod` and `lss_test`** first (CI unit tests query `lss_test` for any `connection: 'mysql'` model — missing table = failing build). Model the DDL on a comparable small table (e.g. `team_users`): int AUTO_INCREMENT PK, real `enum(...)` columns, `tinyint(1)` booleans, `datetime` timestamps.
2. **Set `connection: 'mysql'` explicitly.** Without it the model defaults to the Mongo/`mongoServer` connection and gets NO MySQL table. (`User.js`/`Admin.js`/`Token.js` are Mongo models — do not copy their connection style for a MySQL table.)
3. Also set `autoCreatedAt: false`, `autoUpdatedAt: false`, `autoTK: false`, and `tableName`.
4. Declare an explicit `id` attribute: `{ type: 'integer', primaryKey: true, columnName: '<the_pk_column>' }`.
5. Map timestamps to real columns via `columnName` (e.g. `createdAt → date_created`); do not rely on Waterline auto timestamps.
6. The `identity` is the lowercased filename (set by the consumer's loader) — `ExternalUser.js` → `externaluser`, queried/routed as such (Sails blueprints pluralize to `/externalusers`).

## Legacy vs non-Legacy models

The repo has two families of models:

- **`Legacy*` models** map onto the existing production MySQL schema (the old "warpath" DB). They set an explicit `tableName` pointing at a legacy table, and their attribute names usually differ from the raw column names (see gotcha below). They set `connection: 'mysql'`, `autoTK: false`, and disable `autoCreatedAt`/`autoUpdatedAt`.
- **non-Legacy models** (e.g. `Client.js`, `Keyword.js`, `Social.js`) are newer Waterline-native models. They often omit `tableName`/`connection` and use Waterline's defaults and conventions (auto `createdAt`/`updatedAt`, collection associations, etc.).

### Legacy model → DB table (verified)

| Model file | identity | tableName |
|---|---|---|
| `LegacyClient.js` | `legacyclient` | `aclients` |
| `LegacyPartner.js` | `legacypartner` | `partners` |
| `LegacyOrder.js` | `legacyorder` | `orders` |
| `LegacyOrderProduct.js` | `legacyorderproduct` | `orders_products` |
| `LegacyFulfillmentData.js` | `legacyfulfillmentdata` | `fulfillment_data` |
| `LegacyProduct.js` | `legacyproduct` | `products` |
| `LegacyUser.js` | `legacyuser` | `adminusers` |
| `LegacyDirectory.js` | `legacydirectory` | `directory_pool` |
| `LegacyOrganization.js` | `legacyorganization` | `organizations` |
| `LegacyInvoice.js` | `legacyinvoice` | `invoices` |
| `LegacyScore.js` | `legacyscore` | `scores` |
| `LegacyOrderProgress.js` | `legacyorderprogress` | `newsub` |

(42 `Legacy*` models total; check the `tableName` in each file before assuming.)

## CRITICAL gotcha: attribute names ≠ column names

Model attribute names OFTEN DIFFER from the underlying DB column, via `columnName`. You CANNOT guess column names from attribute names or vice versa. Before writing any query (Waterline or raw SQL), READ the relevant model file. Examples from `LegacyClient.js` (table `aclients`):

- `name` → column `d1`, `street` → `d3`, `city` → `d4`, `phone` → `d7`, `website` → `d9`
- `partner` (assoc) → `partner_id_fix`, `score` → `orderid`, `createdAt` → `since`, `isInactive` → `inactive`

Likewise `LegacyOrder.products` → column `orde`, `LegacyOrderProduct.isDisabled` → `disabled`, `LegacyFulfillmentData.url` → `live_url`.

## Conventions

- **Associations:** `model:` for belongs-to (e.g. `partner: { model: 'legacypartner', columnName: 'partner_id_fix' }`), `collection:` + `via:` for has-many (e.g. `keywords: { collection: 'keyword', via: 'client' }`). The `model`/`collection` value is the target's lowercase identity.
- **Enums as strings:** many legacy boolean-like fields are stored as `enum: ['false', 'true']` strings, not real booleans — match `'false'`/`'true'` literally in queries.
- **`toJSON` / `beforeCreate`** lifecycle hooks exist on some models (e.g. `LegacyClient`, `Client`) for utf8 cleanup and key generation.
- No `readonly()` helper is used in this package; legacy tables are simply edited with care.

## Database

The MySQL DB lives on AWS RDS (Aurora). Connection host and the credential aliases (`d`, `dd`, `de`, `dw`, …) are documented in `~/CLAUDE.md`. For query-performance pitfalls (slow queries, indexing, deep-offset pagination) see `/home/users/harv/advice/CLAUDE.md` and `~/CLAUDE.md`.
