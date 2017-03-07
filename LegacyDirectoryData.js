'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'directory_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'DIRECTORY_DATA_ID'
    },
    client: {
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
    directory: {
      type: 'string',
      required: true,
      columnName: 'provider'
    },
    errors: {
      type: 'boolean',
      defaultsTo: false
    },
    elapsedTime: {
      type: 'integer',
      columnName: 'elapsed_ms'
    },
    score: {
      type: 'integer'
    }
  }
};  

