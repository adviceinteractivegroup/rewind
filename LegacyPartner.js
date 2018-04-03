'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'partners',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'partner_id',
    },
    username: {
      type: 'string',
      required: true,
    },
    domain: {
      type: 'string',
      required: true,
    },
    ssodomain: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: true,
    },
    emailBilling: {
      type: 'string',
      columnName: 'email_billing',
    },
    emailMain: {
      type: 'string',
      columnName: 'email_main',
    },
    lastLogin: {
      type: 'datetime',
      columnName: 'date_lastlogin',
    },
    lastRenewals: {
      type: 'datetime',
      columnName: 'date_lastrenewal',
    },
    extras: {
      type: 'json',
    },
    deactivated: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    deactivatedAt: {
      type: 'datetime',
      columnName: 'deactivated_date',
    },
    deactivatedReason: {
      type: 'string',
      columnName: 'deactivated_reason',
    },
    test: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    test2: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    test3: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    invoiced: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    chargeDescription: {
      type: 'string',
      columnName: 'charge_name',
    },
    apiKey: {
      type: 'string',
      columnName: 'api_key',
      index: true,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
    },
    type: {
      type: 'string',
      enum: ['retail', 'reseller', 'enterprise'],
      defaultsTo: 'retail',
      columnName: 'pay_type',
    },
    agent: {
      model: 'legacysalesagent',
      columnName: 'sales_agent_id',
    },
    manager: {
      model: 'legacyaccountmanager',
      columnName: 'account_manager_id',
    },
    totalClients: {
      type: 'integer',
      columnName: 'total_clients',
    },
    totalClientsActive: {
      type: 'integer',
      columnName: 'total_active',
    },
    totalOrders: {
      type: 'integer',
      columnName: 'total_orders',
    },
    totalProducts: {
      type: 'integer',
      columnName: 'total_products',
    },
    totalSpend: {
      type: 'integer',
      columnName: 'total_spend',
    },
    totalOrders30: {
      type: 'integer',
      columnName: 'total_orders_30',
    },
    totalOrders90: {
      type: 'integer',
      columnName: 'total_orders_90',
    },
    totalSpend30: {
      type: 'integer',
      columnName: 'total_spend_30',
    },
    totalSpend90: {
      type: 'integer',
      columnName: 'total_spend_90',
    },
		gmb_tokens: {
      type: 'json',
    },
  },
};
