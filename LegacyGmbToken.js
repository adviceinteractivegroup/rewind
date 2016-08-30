'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'gmb_tokens',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    token: {
      type: 'string',
      required: true
    },
    clients: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    createdAt: {
      date: 'datetime',
      columnName: 'thedate',
      defaultsTo: function () { return Date(); }
    }
  }
};  

