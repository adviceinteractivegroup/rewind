'use strict';

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

    salt: {
      type: 'string',
      required: true,
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
};
