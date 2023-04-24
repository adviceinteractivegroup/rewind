'use strict';

let md5 = require('md5');

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'partners',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'partner_id',
    },
    username: {
      type: 'string',
      required: true,
    },
    domain: {
      type: 'string',
      required: true,
      regex: /^[a-zA-Z0-9\.\-]*$/i,
    },
    ssodomain: {
      type: 'string',
      regex: /^[a-zA-Z0-9\.\-]*$/i,
    },
    country: {
      type: 'string',
      enum: ['US', 'CA', 'CR', 'BS'],
      defaultsTo: 'US',
      columnName: 'country_code',
    },
    title: {
      type: 'string',
      required: true,
    },
    emailBilling: {
      type: 'string',
      columnName: 'email_billing',
    },
    emailMain: {
      type: 'string',
      columnName: 'email_main',
    },
    lastLogin: {
      type: 'datetime',
      columnName: 'date_lastlogin',
    },
    lastRenewals: {
      type: 'datetime',
      columnName: 'date_lastrenewal',
    },
    extras: {
      type: 'json',
    },
    widget: {
      type: 'json',
    },
    deactivated: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    deactivatedAt: {
      type: 'datetime',
      columnName: 'deactivated_date',
    },
    deactivatedReason: {
      type: 'string',
      columnName: 'deactivated_reason',
    },
    test: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'true',
    },
    test2: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'true',
    },
    test3: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'true',
    },
    test4: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'true',
    },
    invoiced: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    chargeDescription: {
      type: 'string',
      columnName: 'charge_name',
    },
    apiKey: {
      type: 'string',
      columnName: 'api_key',
      index: true,
    },
    widgetKey: {
      type: 'string',
      columnName: 'widget_key',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      defaultsTo: function() {
       return new Date();
      },
    },
    type: {
      type: 'string',
      enum: ['retail', 'reseller', 'enterprise', 'python'],
      defaultsTo: 'retail',
      columnName: 'pay_type',
    },
    organization: {
      model: 'legacyorganization',
      columnName: 'organization_id',
    },
     agent: {
      model: 'legacysalesagent',
      columnName: 'sales_agent_id',
    },
    manager: {
      model: 'legacyaccountmanager',
      columnName: 'account_manager_id',
    },
    totalClients: {
      type: 'integer',
      columnName: 'total_clients',
    },
    totalClientsActive: {
      type: 'integer',
      columnName: 'total_active',
    },
    totalClientsDeactive: {
      type: 'integer',
      columnName: 'total_deactive',
    },
    totalOrders: {
      type: 'integer',
      columnName: 'total_orders',
    },
    totalProducts: {
      type: 'integer',
      columnName: 'total_products',
    },
    totalSpend: {
      type: 'integer',
      columnName: 'total_spend',
    },
    totalOrders30: {
      type: 'integer',
      columnName: 'total_orders_30',
    },
    totalOrders90: {
      type: 'integer',
      columnName: 'total_orders_90',
    },
    totalSpend30: {
      type: 'integer',
      columnName: 'total_spend_30',
    },
    totalSpend90: {
      type: 'integer',
      columnName: 'total_spend_90',
    },
    totalBillingErrors: {
      type: 'integer',
      columnName: 'total_billing_errors',
    },
    reportingList: {
      model: 'reportinglist',
      columnName: 'reporting_list',
    },
    isThrottled: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'throttle',
    },
    featurePython: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'feature_python',
    },
    featureWidget: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'feature_widget',
    },
    featureRollup: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_rollup',
    },
    featureTrial: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_trial',
    },
    featureThreshold: {
      type: 'integer',
      defaultsTo: 50,
      columnName: 'feature_threshold',
    },
     featurePauseOrders: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_pauseorders',
    },
     featureClientLimit: {
      type: 'integer',
      defaultsTo: 500,
      columnName: 'feature_client_limit',
    },
    featureContractMonths: {
      type: 'integer',
      defaultsTo: 12,
      columnName: 'feature_contract_months',
    },
    featurePythonCredits: {
      type: 'integer',
      defaultsTo: 10,
      columnName: 'feature_python_credits',
    },
    featureVerticals: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'feature_verticals',
    },
    featureSocial: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_social',
    },
    featureReview: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_review',
    },
    featureVoicify: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_voicify',
    },
     featureNoDupes: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_nodupes',
    },
     featureKeywords: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_keywords',
    },
      featureCommBoard: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'feature_commboard',
    },
    featurePdfReports: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_pdf_reports',
    },
    featureGmb: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'feature_gmb',
    },
    featureSimulation: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_simulation',
    },
    featureSubtype: {
      type: 'string',
      defaultsTo: 'retail',
      enum: ['retail', 'brand', 'agency'],
      columnName: 'feature_subtype',
    },
    featureConfig: {
      type: 'json',
      columnName: 'feature_config',
    },
    featureBaselineLimit: {
      type: 'integer',
      columnName: 'feature_baseline_limit',
    },
    featureOnlyCustom: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_only_custom',
    },
    featureBudget: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_budget',
    },
    aarTotal: {
      type: 'integer',
      columnName: 'aar_total',
    },
    aarCancelled: {
      type: 'integer',
      columnName: 'aar_cancelled',
    },
    aarRate: {
      type: 'float',
      columnName: 'aar_rate',
    },
    spendMonth: {
      type: 'float',
      columnName: 'spend_month',
    },
    spendQuarter: {
      type: 'float',
      columnName: 'spend_quarter',
    },
    spendYear: {
      type: 'float',
      columnName: 'spend_year',
    },
    egmb_agency_id: {
      type: 'integer',
      columnName: 'dba_agency_id',
    },
    flagEngagement: {
      type: 'string',
      columnName: 'flag_engagement',
    },
  },

  beforeCreate: function(values, cb) {
    let hrtime = process.hrtime();
    values.apiKey = 'pk_' + md5(hrtime + 'warpath forever!');
    values.widgetKey = 'wk_' + md5(hrtime + 'warpath forever widget!'.substring(2, 22));
    values.ssdomain = md5(hrtime + 'warpath forever widget!'.substring(2, 16)) + '.lssdev.com';
    cb();
  },

};
