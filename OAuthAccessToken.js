'use strict';

/**
 * OAuthAccessToken
 *
 * Bearer token issued by POST /oauth/token. Table: oauth_access_tokens —
 * see ~/advice/docs/oauth-provider-ddl.sql
 *
 * The token is bound to `partner`: on every request the bearer policy resolves
 * the row, checks expiry/revocation, and then presents that partner's
 * permanent partners.api_key to the rest of the policy chain, so an OAuth
 * token can only ever reach the authorising partner's data.
 *
 * `tokenHash` is the sha256 hex digest; the plaintext token is returned to the
 * client once and never stored.
 */
module.exports = {
  connection: 'mysql',
  tableName: 'oauth_access_tokens',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    tokenHash: {
      type: 'string',
      columnName: 'token_hash',
      required: true,
      unique: true,
    },
    clientId: {
      type: 'string',
      columnName: 'client_id',
      required: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
      required: true,
    },
    scope: {
      type: 'string',
      defaultsTo: 'read',
    },
    resource: {
      type: 'string',
    },
    expiresAt: {
      type: 'datetime',
      columnName: 'expires_at',
      required: true,
    },
    revokedAt: {
      type: 'datetime',
      columnName: 'revoked_at',
    },
    lastUsedAt: {
      type: 'datetime',
      columnName: 'last_used_at',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
  },
};
