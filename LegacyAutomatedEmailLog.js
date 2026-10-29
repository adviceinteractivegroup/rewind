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
    // 'automated' for scheduled report sends, 'sendnow' for the dashboard's
    // Send Now test sends. The score-change baseline only considers
    // source='automated', so a test send never moves it.
    source: {
      type: 'string',
      defaultsTo: 'automated',
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
