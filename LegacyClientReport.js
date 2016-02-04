'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'v3_report',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    clientId: {
      type: 'integer',
      columnName: 'clientid'
    },
    data: {
      type: 'string',
      columnName: 'previous'
    },
    data_initial: {
      type: 'string',
      columnName: 'actual'
    },
    type: {
      type: 'string',
      enum: ['local','directory','ranking','social','reputation','website','citations','competitor','cancelled'],
      required: true,
      columnName: 'module'
    }
  }
};  
