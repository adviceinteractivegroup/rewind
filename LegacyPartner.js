'use strict';

var md5 = require('md5');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'partners',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'partner_id'
    },
    username: {
      type: 'string'
    },
    domain: {
      type: 'string'
    },
    ssodomain: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    extras: {
      type: 'json'
    },
    deactivated: {
      type: 'string',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    invoiced: {
      type: 'string',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    apiKey: {
      type: 'string'
    },
    type: {
      type: 'string',
      enum: ['retail','reseller','enterprise'],
      defaultsTo: 'retail'
    }
  }
};  

