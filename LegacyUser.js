'use strict';

let md5 = require('md5');

module.exports = {
  connection: 'mysql',
  tableName: 'adminusers',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
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
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
    },
    role: {
      type: 'string',
      enum: ['admin', 'agent', 'manager', 'sales', 'staff'],
      defaultsTo: 'admin',
      columnName: 'utype',
    },
    act: {
      type: 'string',
      defaultsTo: '',
    },
    support: {
      type: 'string',
      defaultsTo: 'false',
    },
    master: {
      type: 'string',
      defaultsTo: 'false',
    },
    isDeleted: {
      type: 'boolean',
      columnName: 'is_deleted',
      defaultsTo: false,
    },
    ip: {
      type: 'string',
      defaultsTo: '',
    },
    discount: {
      type: 'integer',
      defaultsTo: 0,
    },
    countLive: {
      type: 'integer',
      columnName: 'count_live',
      defaultsTo: 0,
    },
    countSnapshot: {
      type: 'integer',
      columnName: 'count_snapshot',
      defaultsTo: 0,
    },
    whitelist: {
      type: 'string',
      defaultsTo: '',
    },
    filters: {
      type: 'string',
      defaultsTo: '',
    },
    logins: {
      type: 'integer',
      defaultsTo: 0,
    },
    lastLogin: {
      type: 'string',
      columnName: 'last_login',
    },
    dateJoined: {
      type: 'string',
      columnName: 'date_joined',
    },
    passwordResetKey: {
      type: 'string',
      columnName: 'password_reset_key',
    },
    passwordResetExpiration: {
      type: 'string',
      columnName: 'password_reset_expiration',
    },
  },

  beforeCreate: function(values, cb) {
    for (let a = 0; a < 5000; a++) {
      values.password = md5(values.password);
    }
    cb();
  },

  beforeUpdate: function(values, cb) {
    if (values.password) {
      for (let a = 0; a < 5000; a++) {
        values.password = md5(values.password);
      }
    }
    cb();
  },
};
