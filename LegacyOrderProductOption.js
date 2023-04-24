'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'orders_products_options',
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
    product: {
      model: 'legacyproduct',
      columnName: 'product_id',
    },
    options: {
      type: 'json',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate_created',
      defaultsTo: function() {
       return Date();
      },
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'thedate_updated',
      defaultsTo: function() {
       return Date();
      },
    },

  },
};
