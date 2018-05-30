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
    updatedAt: {
      type: 'datetime',
      columnName: 'updated',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
    },
  },
};

