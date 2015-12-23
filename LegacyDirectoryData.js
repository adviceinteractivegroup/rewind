'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'directory_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'DIRECTORY_DATA_ID'
    },
    clientId: {
      type: 'integer',
      required: true,
      columnName: 'client_id'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate'
    },
    data: {
      type: 'json',
    },
    provider: {
      type: 'string',
      required: true
    },
    errors: {
      type: 'boolean',
      defaultsTo: false
    },
    results: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};  

