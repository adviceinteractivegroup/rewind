'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'adminusers',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'user_id'
    },
    partner: {
      type: 'string',
      columnName: 'username'
    },
    firstName: {
      type: 'string',
      columnName: 'name'
    },
    lastName: {
      type: 'string',
      columnName: 'last'
    },
    password: {
      type: 'string',
      columnNmae: 'password'
    },
    role: {
      type: 'string',
      enum: ['admin','agent','manager','sales','staff'],
      defaultsTo: 'admin',
      columnName: 'utype'
    }
  }
};  

