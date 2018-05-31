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
    },
    client: {
      model: 'legacyclient',
      columnName: 'id',
    },
    data: {
      type: 'json',
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
  },
};

