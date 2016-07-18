'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'orders',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    client: {
      model: 'legacyclient',
      columnName: 'client'
    },
    products: {
      type: 'string',
      columnName: 'orde'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'dates'
    },
    startedAt: {
      type: 'datetime',
      columnName: 'start_date'
    },
    publishedAt: {
      type: 'datetime',
      columnName: 'publish_date'
    },
    isPaid: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'paid'
    },
    isVerified: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'verified'
    },
    isDrip: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'drip_feed'
    },
    chargeId: {
      type: 'string',
      columnName: 'charge_id'
    },
    price: {
      type: 'string',
      columnName: 'price'
    },
    schedule: {
      type: 'json'
    },
    toJSON: function () {
      var obj = this.toObject();
      obj.products = obj.products.split("|");
      return obj;
    }
  }
};  

