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
      type: 'string',
      required: true
    },
    domain: {
      type: 'string',
      required: true
    },
    ssodomain: {
      type: 'string'
    },
    title: {
      type: 'string',
      required: true
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
    },
    totalClients: {
      type: 'integer',
      columnName: 'total_clients'
    },
    totalOrders: {
      type: 'integer',
      columnName: 'total_orders'
    },
    totalSpend: {
      type: 'integer',
      columnName: 'total_spend'
    }
  }
};  

