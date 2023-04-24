'use strict';

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
    },
    directory: {
      model: 'directory',
      columnName: 'directory_id',
    },
    directoryModule: {
      type: 'string',
      columnName: 'scraper_module',
    },
    name: {
      type: 'string',
      columnName: 'product',
    },
     logo: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    productType: {
      type: 'string',
      enum: ['primary', 'additional', 'verified', 'spring_data_clean', 'realtime', 'realtime_aggregators', 'realtime_addons', 'package', 'vertical', 'managed_service'],
      defaultsTo: 'primary',
      columnName: 'type',
    },
    extra: {
      type: 'string',
      columnName: 'description_extra',
    },
    extras: {
      type: 'json',
    },
    priceRetail: {
      type: 'float',
      columnName: 'priceb',
    },
    priceReseller: {
      type: 'float',
      columnName: 'pricea',
    },
    maintenanceInterval: {
      type: 'string',
      columnName: 'repeat',
    },
    maintenancePriceRetail: {
      type: 'float',
      columnName: 'repeat_price',
    },
    maintenancePriceReseller: {
      type: 'float',
      columnName: 'repeat_aprice',
    },
    renewalInterval: {
      type: 'string',
      columnName: 'renewal_interval',
    },
    renewalPriceRetail: {
      type: 'float',
      columnName: 'renewal_price_retail',
    },
    renewalPriceReseller: {
      type: 'float',
      columnName: 'renewal_price',
    },
    submissionModule: {
      type: 'string',
      columnName: 'submission_module',
    },
    submissionModuleRequirements: {
      type: 'json',
      columnName: 'submission_module_requirements',
    },
    submissionModuleOption: {
      type: 'string',
      columnName: 'submission_module_option',
    },
    submissionModuleCategory: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
      columnName: 'submission_module_category',
    },
    country: {
      type: 'string',
      enum: ['us', 'ca'],
      defaultsTo: 'us',
    },
    hasLink: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'link_back',
    },
    hasOptions: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'options',
    },
    replacement: {
      type: 'json',
    },
    isDisabled: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'disable',
    },
    hasFulfillment: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'has_fulfillment',
    },

    countActive: {
      type: 'integer',
      columnName: 'count_active',
    },
    countInactive: {
      type: 'integer',
      columnName: 'count_inactive',
    },
    countLink: {
      type: 'integer',
      columnName: 'count_link',
    },

    // boolean to tell if we have a read api
    featureRead: {
      type: 'integer',
      columnName: 'feature_read',
    },

    // if directory supports hidden addreses
    featureHiddenAddress: {
      type: 'integer',
      columnName: 'feature_hidden_address',
    },

    // if the directory has the capability to be disabled AND if we have implemented it
    featureDerez: {
      type: 'integer',
      columnName: 'feature_derez',
    },

    // if we have API access to submit
    featureApi: {
      type: 'integer',
      columnName: 'feature_api',
    },

    // if we have API access to submit
    featureReviews: {
      type: 'integer',
      columnName: 'feature_reviews',
    },

    // if we have API access to submit
    featureFreshdesk: {
      type: 'integer',
      columnName: 'feature_freshdesk',
    },

    // if the module we have created supports passing in a url to scrape instead of search
    featureOptimized: {
      type: 'integer',
      columnName: 'feature_optimized',
    },

    deactivationInterval: {
      type: 'string',
      enum: ['monthly', 'yearly'],
      defaultsTo: 'monthly',
      columnName: 'deactivation_interval',
    },
    reportingList: {
      model: 'reportinglist',
      columnName: 'reporting_list_append',
    },
  },
};
