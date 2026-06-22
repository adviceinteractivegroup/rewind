# rewind

Shared Waterline (Sails.js) model definitions for the LSS platform, backed by MySQL via `sails-mysql`. This is a model-only package: there is no server, no Sails app, no cron, and no entry point that runs anything. Each `*.js` at the repo root is one Waterline model definition (`module.exports = { ... }`).

## How it's consumed

`rewind` is a PRIVATE npm package (git dependency from `github.com/adviceinteractivegroup/rewind`). It is pulled into `node_modules/rewind` of the apps that use it and loaded at runtime:

- `~/warpath` (Sails API)
- `~/chronos` (background workers) — see `chronos.js`, which does `fs.readdirSync('./node_modules/rewind')`, `require`s each file, sets `identity = name.toLowerCase()`, and registers it with `Waterline.Collection.extend(...)`.
- `~/grimlock`

Because the model `identity` is the lowercased filename, `LegacyOrderProduct.js` is referenced in associations and queries as `legacyorderproduct`.

There are no build/run commands here. `package.json` defines only a placeholder `test` script (no real tests). The only workflow is editing model files and bumping `version` for consumers to pick up.

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
