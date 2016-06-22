'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'submission_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'SUBMISSION_DATA_ID'
    },
    directory: {
      type: 'string',
      required: true,
      index: true
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
    success: {
      type: 'string',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    error: {
      type: 'string'
    },
    data: {
      type: 'json'
    }
  }
};  

