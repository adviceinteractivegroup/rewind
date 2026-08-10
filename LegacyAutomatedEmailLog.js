'use strict';

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'automated_email_logs',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    status: {
      type: 'string',
      defaultsTo: 'sent',
    },
    error: {
      type: 'text',
    },
    changes: {
      type: 'json',
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
