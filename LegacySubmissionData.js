'use strict';

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'submission_data',
  autoTK: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'SUBMISSION_DATA_ID',
      autoIncrement: true,
    },
    directory: {
      type: 'string',
      required: true,
      index: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      defaultsTo: function() {
        return new Date();
      },
    },
    success: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    action: {
      type: 'string',
      enum: ['submit', 'update', 'delete', 'link', 'claim', 'duplicate', 'deactivate'],
    },
    url: {
      type: 'string',
    },
    error: {
      type: 'string',
    },
    data: {
      type: 'json',
    },
    /*
    isProcessed: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
      columnName: 'processed',
    },
    isInvalid: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
      columnName: 'invalid',
    },
    */
  },
};

