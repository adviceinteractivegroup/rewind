'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'review_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'REVIEW_SUMMARY_ID',
    },
    client: {
      model: 'legacyclient',
      required: true,
      columnName: 'client_id',
    },
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
      defaultsTo: function() {
       return new Date();
      },
    },
    data: {
      type: 'json',
    },
  },
};

