'use strict';

module.exports = {
	connection: 'mysql',
  autoTK: false,
	tableName: 'aclients_groups',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: 'string',
      required: true
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    clients: { 
      collection: 'legacyclient',
      via: 'groups'
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
      defaultsTo: function() {
       return new Date();
      },
    },
    count: {
      type: 'integer',
    }
  },
};

