guse strict';

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
    hours: {
      type: 'string',
    },
    description: {
      type: 'string',
    },

    categoryPrimary: {
      type: 'string',
      columnName: 'category_primary',
    },
    categorySecondary: {
      type: 'string',
      columnName: 'category_secondary',
    },

    categoryPrimaryScore: {
      type: 'integer',
      columnName: 'category_primary_score',
    },
    categorySecondaryScore: {
      type: 'integer',
      columnName: 'category_secondary_score',
    },

    website: {
      type: 'string',
      columnName: 'website',
    },

    websiteScore: {
      type: 'integer',
      columnName: 'website_score',
    },

    descriptionScore: {
      type: 'integer',
      columnName: 'description_score',
    },

    hoursScore: {
      type: 'integer',
      columnName: 'hours_score',
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

