'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'orders_products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
    },
    order: {
      model: 'legacyorder',
      columnName: 'order_id',
    },
    product: {
      model: 'legacyproduct',
      columnName: 'product_id',
    },
    customPackage: {
      type: 'string',
      columnName: 'custom_package',
    },
    price: {
      type: 'float',
      columnName: 'price',
    },
    priceMaintenance: {
      type: 'float',
      columnName: 'price_maintenance',
    },
    priceRenewal: {
      type: 'float',
      columnName: 'price_renewal',
    },
    delayMaintenance: {
      type: 'int',
      columnName: 'delay_maintenance',
    },
    intervalMaintenance: {
      type: 'string',
      columnName: 'interval_maintenance',
      enum: ['monthly', 'yearly'],
      defaultsTo: 'monthly',
    },
    intervalRenewal: {
      type: 'string',
      columnName: 'interval_renewal',
      enum: ['monthly', 'yearly'],
      defaultsTo: 'yearly',
    },
    periodMaintenance: {
      type: 'int',
      columnName: 'period',
    },
    pendingRefresh: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'pending_refresh',
    },
    isDrip: {
      type: 'string',
      columnName: 'drip_feed',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    isDisabled: {
      type: 'string',
      columnName: 'disabled',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    isValid: {
      type: 'string',
      columnName: 'is_valid',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    isCompleted: {
      type: 'string',
      columnName: 'completed',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
      defaultsTo: function() {
       return Date();
      },
    },
    startedAt: {
      type: 'datetime',
      columnName: 'date_started',
    },
    completedAt: {
      type: 'datetime',
      columnName: 'date_completed',
    },
    disabledAt: {
      type: 'datetime',
      columnName: 'date_disabled',
    },
    derezzedAt: {
      type: 'datetime',
      columnName: 'date_derezzed',
    },
    lastCheckedAt: {
      type: 'datetime',
      columnName: 'date_last_check',
    },
    nextCheckAt: {
      type: 'datetime',
      columnName: 'date_next_check',
    },
  },
};

