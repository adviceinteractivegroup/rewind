'use strict';

let md5 = require('md5');
let utf8 = require('utf8');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'scouts',
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
    scout: {
      type: 'string',
      required: true,
      columnName: 'scout_id'
    },
    keyword: {
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

 
  },
};
