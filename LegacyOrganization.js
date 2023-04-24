'use strict';

let md5 = require('md5');
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'organizations',
  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
    },

    email: {
      type: 'string',
      required: true,
    },

    name: {
      type: 'string',
      required: true,
    },

    color: {
      type: 'string',
    },
    uuid: {
      type: 'string',
    },


    salt: {
      type: 'string',
    },

    password: {
      type: 'string',
      required: true,
    },

    totalLogins: {
      type: 'integer',
      columnName: 'count_logins',
    },

    logoUrl: {
      type: 'string',
      columnName: 'logo_url',
    },

    createdAt: {
      type: 'datetime',
      columnName: 'thedate_created',
      defaultsTo: function() {
       return new Date();
      },
    },

    updatedAt: {
      type: 'datetime',
      columnName: 'thedate_updated',
    },

    apiKey: {
      type: 'string',
      columnName: 'api_key',
      index: true,
    },

  },
  beforeCreate: function(values, cb) {
    let hrtime = process.hrtime();
    values.salt = md5(hrtime + 'https://www.youtube.com/watch?v=jZkdcYlOn5M');
    values.password = md5(values.salt + values.password);
    values.apiKey = 'ok_' + md5(values.salt + values.password);
    cb();
  },
};
