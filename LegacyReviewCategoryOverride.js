'use strict';

// Review Responder preferred wording for a Google category (gcid), at account
// scope (scope_type 'ACCOUNT', scope_id '') or location scope (scope_type
// 'LOCATION', scope_id = the location's client id). Unique on
// (client_id, scope_type, scope_id, gcid).
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_category_overrides',
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
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
    },
    scopeType: {
      type: 'string',
      columnName: 'scope_type',
      defaultsTo: 'ACCOUNT',
    },
    scopeId: {
      type: 'string',
      columnName: 'scope_id',
      defaultsTo: '',
    },
    gcid: {
      type: 'string',
      required: true,
    },
    sourceLabel: {
      type: 'string',
      columnName: 'source_label',
    },
    preferredLabel: {
      type: 'string',
      columnName: 'preferred_label',
      required: true,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
      defaultsTo: function() {
        return new Date();
      },
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_at',
      defaultsTo: function() {
        return new Date();
      },
    },
  },
};
