'use strict';

let md5 = require('md5');
let utf8 = require('utf8');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'grids_points',
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
      required: true,
    },
    grid: {
      model: 'legacygrid',
      columnName: 'grid_id',
      required: true,
    },

    LAT: {
      type: 'float',
    },
    LON: {
      type: 'float',
    },
    ranking: {
      type: 'integer',
    },
    coord: {
      type: 'string',
    },

    data: {
      type: 'json',
    },

    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
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
