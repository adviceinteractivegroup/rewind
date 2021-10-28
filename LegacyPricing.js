'use strict';

module.exports = {
  attributes: {
    partner: {
      model: 'legacypartner',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    product: {
      model: 'legacyproduct',
    },
    products: {
      type: 'json',
    },
    price: {
      type: 'float',
      required: true,
    },
    maintenanceInterval: {
      type: 'string',
      enum: ['monthly', 'yearly'],
      defaultsTo: 'monthly',
    },
    delayMaintenance: {
      type: 'int',
      defaultsTo: 1,
    },
    maintenancePrice: {
      type: 'float',
    },
    isPackage: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};

