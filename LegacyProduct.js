'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
    },
    name: {
      type: 'string',
      columnName: 'product',
    },
    description: {
      type: 'string',
    },
    extra: {
      type: 'string',
      columnName: 'description_extra',
    },
    priceRetail: {
      type: 'float',
      columnName: 'priceb',
    },
    priceReseller: {
      type: 'float',
      columnName: 'pricea',
    },
    maintenanceInterval: {
      type: 'string',
      columnName: 'repeat',
    },
    productType: {
      type: 'string',
      columnName: 'type',
    },
    maintenancePriceRetail: {
      type: 'float',
      columnName: 'repeat_price',
    },
    maintenancePriceReseller: {
      type: 'float',
      columnName: 'repeat_aprice',
    },
    submissionModule: {
      type: 'string',
      columnName: 'submission_module',
    },
    submissionModuleRequirements: {
      type: 'json',
      columnName: 'submission_module_requirements',
    },
    submissionModuleOption: {
      type: 'string',
      columnName: 'submission_module_option',
    },
    replacement: {
      type: 'json',
    },
  },
};

