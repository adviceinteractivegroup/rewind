'use strict';

/**
 * OAuthRefreshToken
 *
 * Long-lived token used by POST /oauth/token (refresh_token grant) to mint a
 * new access token. Table: oauth_refresh_tokens — see
 * ~/advice/docs/oauth-provider-ddl.sql
 *
 * Refresh tokens are rotated on every use: the old row is revoked and stamped
 * with `replacedBy` (the successor's hash) so a replay is detectable.
 *
 * `tokenHash` is the sha256 hex digest; the plaintext token is returned to the
 * client once and never stored.
 */
module.exports = {
  connection: 'mysql',
  tableName: 'oauth_refresh_tokens',
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
    expiresAt: {
      type: 'datetime',
      columnName: 'expires_at',
      required: true,
    },
    revokedAt: {
      type: 'datetime',
      columnName: 'revoked_at',
    },
    // token_hash of the rotated successor
    replacedBy: {
      type: 'string',
      columnName: 'replaced_by',
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
