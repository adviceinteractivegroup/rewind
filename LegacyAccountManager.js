'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'account_managers',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'account_manager_id',
    },
    email: {
      type: 'string',
      required: true,
    },
  },
};

