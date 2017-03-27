'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'visibility_score',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
    },
    google: {
      type: 'integer',
    },
    yelp: {
      type: 'integer',
    },
    bing: {
      type: 'integer',
    },
    directory: {
      type: 'integer',
    },
    nap: {
      type: 'integer',
    },
    score: {
      type: 'integer',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date',
    },
  },
};
