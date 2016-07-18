'use strict';

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
      type: 'string',
      columnName: 'api_key'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate'
    },
    type: {
      type: 'string',
      enum: ['retail','reseller','enterprise'],
      defaultsTo: 'retail',
      columnName: 'pay_type'
    },
    agent: {
      model: 'legacysalesagent',
      columnName: 'sales_agent_id'
    }
  }
};  

