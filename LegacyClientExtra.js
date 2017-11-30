'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'lss_extra',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
      index: true,
    },
    categories: {
      type: 'string',
    },
    products: {
      type: 'string',
    },
    brands: {
      type: 'string',
    },
    specialties: {
      type: 'string',
    },
    slogan: {
      type: 'string',
    },
  },
};
