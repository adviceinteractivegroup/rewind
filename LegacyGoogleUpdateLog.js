'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'google_update_log',
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
    data: {
      type: 'json',
    },
    createdAt: {
      columnName: 'thedate',
      type: 'datetime',
      defaultsTo: function() {
       return new Date();
      },
    },

  },
};

