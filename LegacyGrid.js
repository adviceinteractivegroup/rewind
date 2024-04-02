'use strict';

let md5 = require('md5');
let utf8 = require('utf8');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'grid_reference',
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
      required: true
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true
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

    isEnabled: {
      type: 'boolean',
      columnName: 'enabled'
    },
    keyword: {
      type: 'string',
    },
    reference: {
      type: 'string',
    }
 
  },
};
