'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'directory_pool',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'directory_id',
    },
    name: {
      type: 'string',
      columnName: 'directory_name',
    },
    alias: {
      type: 'string',
      columnName: 'directory_alias',
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
      columnName: 'pricea',
    },
    priceReseller: {
      type: 'float',
      columnName: 'priceb',
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
      columnName: 'repeat_aprice',
    },
    maintenancePriceReseller: {
      type: 'float',
      columnName: 'repeat_price',
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
  },
};

