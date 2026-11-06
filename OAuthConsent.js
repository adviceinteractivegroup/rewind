'use strict';

/**
 * OAuthConsent
 *
 * A remembered authorisation grant: one row per (partner, client) pair. When a
 * partner has already approved a client for a scope, GET /oauth/authorize can
 * skip the consent screen and issue a code straight away.
 * Table: oauth_consents — see ~/advice/docs/oauth-provider-ddl.sql
 */
module.exports = {
  connection: 'mysql',
  tableName: 'oauth_consents',
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
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
      required: true,
    },
    clientId: {
      type: 'string',
      columnName: 'client_id',
      required: true,
    },
    scope: {
      type: 'string',
      defaultsTo: 'read',
    },
    revokedAt: {
      type: 'datetime',
      columnName: 'revoked_at',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_at',
    },
  },
};
