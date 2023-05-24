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
      columnName: 'REVIEW_DATA_ID',
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
    reviewKey: {
      type: 'string',
      columnName: 'review_key',
    },
    reviewedAt: {
      type: 'datetime',
      columnName: 'date_review',
    },
    provider: {
      type: 'string',
      required: true,
    },
    batch: {
      model: 'batch',
      columnName: 'batch_id',
    },

    url: {
      type: 'string',
    },
    reviewer: {
      type: 'string',
    },
    sentiment: {
      type: 'integer',
    },
    score: {
      type: 'integer',
    },
    comment: {
      type: 'string',
    },
    replied: {
      type: 'boolean',
    },
  },
};

