'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'scores',
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
    directories: {
      type: 'json',
    },
    data: {
      type: 'json',
    },
    score: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated',
      defaultsTo: function() {
       return new Date();
      },
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      defaultsTo: function() {
       return new Date();
      },
    },
    isComplete: {
      type: 'boolean',
      columnName: 'is_complete',
      defaultsTo: 0
    }
  },
};

