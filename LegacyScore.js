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
    directories: {
      type: 'json',
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
    isComplete: {
      type: 'boolean',
      columnName: 'is_complete',
      defaultsTo: 0
    }
  },
};

