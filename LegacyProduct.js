'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      columnName: 'product'
    },
    description: {
      type: 'string'
    },
    extra: {
      type: 'string',
      columnName: 'description_extra'
    },
    priceRetail: {
      type: 'float',
      columnName: 'pricea'
    },
    priceReseller: {
      type: 'float',
      columnName: 'priceb'
    },
    maintenanceInterval: {
      type: 'string',
      columnName: 'repeat'
    },
    productType: {
      type: 'string',
      columnName: 'type'
    },
    maintenancePriceRetail: {
      type: 'float',
      columnName: 'repeat_aprice'
    },
    maintenancePriceReseller: {
      type: 'float',
      columnName: 'repeat_price'
    },
    submissionModule: {
      type: 'string',
      columnName: 'submission_module'
    },
    submissionModuleOption: {
      type: 'string',
      columnName: 'submission_module_option'
    }
  }
};  

