'use strict';

/**
 * OAuthClient
 *
 * One row per application registered against the platform's OAuth 2.1
 * provider (OpenAI, Claude, any MCP connector, or a partner-created
 * integration). Table: oauth_clients — see ~/advice/docs/oauth-provider-ddl.sql
 *
 * `partner_id` is NULL for dynamically registered (RFC 7591) clients: those
 * are global applications and the owning partner is only decided when a
 * partner approves the consent screen. Clients created from Unicron's
 * Integrations page are bound to the partner up front.
 *
 * `clientSecret` holds the sha256 hex digest — the plaintext secret is
 * shown exactly once, at creation.
 */
module.exports = {
  connection: 'mysql',
  tableName: 'oauth_clients',
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
    clientId: {
      type: 'string',
      columnName: 'client_id',
      required: true,
      unique: true,
    },
    // sha256 hex of the client secret; NULL for public PKCE-only clients
    clientSecret: {
      type: 'string',
      columnName: 'client_secret',
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    // one absolute redirect URI per line
    redirectUris: {
      type: 'text',
      columnName: 'redirect_uris',
      required: true,
    },
    grantTypes: {
      type: 'string',
      columnName: 'grant_types',
      defaultsTo: 'authorization_code refresh_token',
    },
    scopes: {
      type: 'string',
      defaultsTo: 'read',
    },
    // none | client_secret_post | client_secret_basic
    tokenEndpointAuthMethod: {
      type: 'string',
      columnName: 'token_endpoint_auth_method',
      defaultsTo: 'none',
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    createdBy: {
      type: 'string',
      columnName: 'created_by',
    },
    // active | revoked
    status: {
      type: 'string',
      defaultsTo: 'active',
    },
    lastUsedAt: {
      type: 'datetime',
      columnName: 'last_used_at',
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
