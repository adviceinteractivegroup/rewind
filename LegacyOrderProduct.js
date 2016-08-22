'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'orders_products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    partner: {
      model: "legacypartner",
      columnName: 'partner_id'
    },
    client: {
      model: "legacyclient",
      columnName: 'client_id'
    },
    order: {
      model: "legacyorder",
      columnName: 'order_id'
    },
    product: {
      model: "legacyproduct",
      columnName: 'product_id'
    },
    customPackage: {
      type: 'string',
      columnName: 'custom_package'
    },

    price: {
      type: 'float',
      columnName: 'price'
    },
    priceMaintenance: {
      type: 'float',
      columnName: 'price'
    },
    priceRenewal: {
      type: 'float',
      columnName: 'price'
    },

    delayMaintenance: {
      type: 'int',
      columnName: 'delay_maintenance'
    },
    intervalMaintenance: {
      type: 'int',
      columnName: 'interval_maintenance'
    },
    intervalRenewal: {
      type: 'int',
      columnName: 'interval_renewal'
    },

    periodMaintenance: {
      type: 'int',
      columnName: 'period'
    },

    isDrip: {
      type: 'string',
      columnName: 'drip_feed',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    isDisabled: {
      type: 'string',
      columnName: 'disabled',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    isCompleted: {
      type: 'string',
      columnName: 'completed',
      enum: ['false','true'],
      defaultsTo: 'false'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
      defaultsTo: function () { return Date(); }
    },
    completedAt: {
      type: 'datetime',
      columnName: 'date_completed'
    }


  }
};  

