'use strict';

var md5 = require('md5');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'social_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'SOCIAL_DATA_ID'
    },
    clientId: {
      type: 'integer',
      required: true,
      columnName: 'client_id'
    },
    lastUpdated: {
      type: 'datetime',
      columnName: 'last_updated'
    },
    data: {
      type: 'json',
    },
    url: {
      type: 'string',
      required: true
    },
    provider: {
      type: 'string',
      required: true
    },
    errors: {
      type: 'json'
    },
    lastSuccess: {
      type: 'datetime',
      columnName: 'last_success'
    }
  }
};  

