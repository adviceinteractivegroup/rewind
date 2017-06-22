'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'orders',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id_fix',
      required: true,
    },
    partnerUsername: {
      type: 'string',
      columnName: 'user',
      required: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client',
    },
    products: {
      type: 'string',
      columnName: 'orde',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'dates',
      defaultsTo: function() {
 return Date();
},
    },
    startedAt: {
      type: 'datetime',
      columnName: 'start_date',
      defaultsTo: function() {
 return Date();
},
    },
    publishedAt: {
      type: 'datetime',
      columnName: 'publish_date',
      defaultsTo: function() {
 return Date();
},
    },
    isPaid: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'paid',
    },
    isVerified: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'verified',
    },
    isDrip: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'drip_feed',
    },
    chargeId: {
      type: 'string',
      columnName: 'charge_id',
    },
    price: {
      type: 'float',
      columnName: 'price',
    },
    discount: {
      type: 'float',
      columnName: 'discount',
    },
    schedule: {
      type: 'json',
    },
    toJSON: function() {
      let obj = this.toObject();
      obj.products = obj.products.split('|');
      return obj;
    },
  },
};

