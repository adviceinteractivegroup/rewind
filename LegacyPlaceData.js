'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'place_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    createdAt: {
      type: 'datetime',
      defaultsTo: function() {
       return new Date();
      },
      columnName: 'thedate_created',
    },
    ipaddr: {
      type: 'string',
    },
    data: {
      type: 'json',
    },
  },
};

