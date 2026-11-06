'use strict';

/**
 * OAuthAuthorizationCode
 *
 * Short-lived authorisation codes issued by GET /oauth/authorize and redeemed
 * once at POST /oauth/token (authorization_code grant). Table:
 * oauth_authorization_codes — see ~/advice/docs/oauth-provider-ddl.sql
 *
 * `codeHash` is the sha256 hex digest of the code; the plaintext code only
 * ever travels in the redirect URI.
 */
module.exports = {
  connection: 'mysql',
  tableName: 'oauth_authorization_codes',
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
    codeHash: {
      type: 'string',
      columnName: 'code_hash',
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
    redirectUri: {
      type: 'string',
      columnName: 'redirect_uri',
      required: true,
    },
    scope: {
      type: 'string',
      defaultsTo: 'read',
    },
    codeChallenge: {
      type: 'string',
      columnName: 'code_challenge',
    },
    codeChallengeMethod: {
      type: 'string',
      columnName: 'code_challenge_method',
      defaultsTo: 'S256',
    },
    resource: {
      type: 'string',
    },
    expiresAt: {
      type: 'datetime',
      columnName: 'expires_at',
      required: true,
    },
    usedAt: {
      type: 'datetime',
      columnName: 'used_at',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
  },
};
