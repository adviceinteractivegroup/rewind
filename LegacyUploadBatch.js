'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'aclients_batches',
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
    filename: {
      type: 'string',
      columnName: 'partner_id',
    },
    status: {
      type: 'string',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate_created',
      defaultsTo: function() {
       return new Date();
      },
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'thedate_updated',
    },
  },
};
