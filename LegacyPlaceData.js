'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'chat_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'CHAT_DATA_ID',
    },
    partner: {
      model: 'legacypartner',
      required: true,
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

