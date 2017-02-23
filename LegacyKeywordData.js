'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'keyword_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'KEYWORD_DATA_ID'
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
    keyword: {
      type: 'string',
      required: true
    },
    provider: {
      type: 'string',
      required: true
    },
    lastSuccess: {
      type: 'datetime',
      columnName: 'last_success'
    }
  }
};  
