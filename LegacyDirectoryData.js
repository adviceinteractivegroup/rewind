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
      columnName: 'DIRECTORY_DATA_ID',
    },
    batch: {
      type: 'string',
      columnName: 'batch_id',
    },
    client: {
      model: 'legacyclient',
      required: true,
      columnName: 'client_id',
    },
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id_fix',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      defaultsTo: function() {
       return new Date();
      },
    },
    data: {
      type: 'json',
    },
    results: {
      type: 'string',
      enum: ['false', 'true'],
    },
    directory: {
      type: 'string',
      required: true,
      columnName: 'provider',
    },
    errors: {
      type: 'boolean',
      defaultsTo: false,
    },
    elapsedTime: {
      type: 'integer',
      columnName: 'elapsed_ms',
    },
    score: {
      type: 'integer',
    },
  },
};

