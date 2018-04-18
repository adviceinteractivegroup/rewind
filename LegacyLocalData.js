'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'local_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'LOCAL_DATA_ID',
    },
    client: {
      model: 'legacyclient',
      required: true,
      columnName: 'client_id',
    },
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id_fix',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'report_date',
      defaultsTo: function() {
       return new Date();
      },
    },
    directory: {
      type: 'string',
      required: true,
      columnName: 'provider',
    },
    batch: {
      type: 'string',
      columnName: 'batch_id',
    },
    link: {
      type: 'string',
    },
    claimed: {
      type: 'string',
      enum: ['false', 'true'],
    },
    hours: {
      type: 'string',
      enum: ['false', 'true'],
    },
    description: {
      type: 'string',
      enum: ['false', 'true'],
    },
    categories: {
      type: 'integer',
    },
    photos: {
      type: 'integer',
    },
    photos: {
      type: 'integer',
    },
    website: {
      type: 'string',
      columnName: 'website',
    },

    n: {
      type: 'string',
    },
    nScore: {
      type: 'integer',
      columnName: 'n_score',
    },
    a: {
      type: 'string',
    },
    aScore: {
      type: 'integer',
      columnName: 'a_score',
    },

    p: {
      type: 'string',
    },
    pScore: {
      type: 'integer',
      columnName: 'p_score',
    },

    napScore: {
      type: 'integer',
      columnName: 'nap_score',
    },
    data: {
      type: 'json',
      columnName: 'extra_values',
    },
  },
};

