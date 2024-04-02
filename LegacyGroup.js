'use strict';

module.exports = {
	connection: 'mysql',
  autoTK: false,
	tableName: 'aclients_groups',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
    },
    name: {
      type: 'string',
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    clients: { 
      colleciton: 'legacyclient',
      via: 'groups'
    },
    createdAt: {
      type: 'date',
      column_name: 'thedate_created'
    },
    updatedAt: {
      type: 'date',
      column_name: 'thedate_updated'
    },
    count: {
      type: 'integer',
    }
  },
};

