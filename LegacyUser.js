'use strict';

let md5 = require('md5');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'adminusers',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'user_id',
    },
    partner: {
      type: 'string',
      columnName: 'username',
    },
    firstName: {
      type: 'string',
      columnName: 'name',
    },
    lastName: {
      type: 'string',
      columnName: 'last',
    },
    act: {
      type: 'string',
      defaultsTo: 0,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      columnName: 'password',
    },
    role: {
      type: 'string',
      enum: ['admin', 'agent', 'manager', 'sales', 'staff'],
      defaultsTo: 'admin',
      columnName: 'utype',
    },
    countSnapshot: {
      type: 'integer',
      columnName: 'count_snapshot',
    },
  },

  beforeCreate: function(values, cb) {
    for (let a = 0; a < 5000; a++) {
      values.password = md5(values.password);
    }
    cb();
  },
};
