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
      type: 'thedate_created',
      defaultsTo: function() {
       return new Date();
      },
    },
    ipaddr: {
      type: 'string',
    },
    data: {
      type: 'json',
    },
  },
};

