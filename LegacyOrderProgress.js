'use strict';
module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'newsub',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    order: {
      model: "legacyorder",
      columnName: 'orderid'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'init',
      defaultsTo: function () { return Date(); }
    },
    finishedAt: {
      type: 'datetime',
      columnName: 'end',
      defaultsTo: function () { return Date(); }
    },
    status: {
      type: 'integer'
    }
  }
};  
