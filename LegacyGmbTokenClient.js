'use strict';

module.exports = {
	connection: 'mysql',
  autoTK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'gmb_tokens_clients',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    token: {
      model: 'legacygmbtoken',
      columnName: 'gmb_token_id'
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id'
    },
    createdAt: {
      date: 'datetime',
      columnName: 'thedate',
      defaultsTo: function () { return Date(); }
    }
  }
};  

