'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'google_updates',
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
    },
    field: {
      type: 'string',
      enum: ['name','category','secondary','address','description','website','phone'],
    }
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    createdAt: {
      type: 'datetime',
      defaultsTo: function() {
       return new Date();
      },
    updatedAt: {
      type: 'datetime',
      defaultsTo: function() {
       return new Date();
      },
    },

  },
};

