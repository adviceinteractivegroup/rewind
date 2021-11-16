'use strict';

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
      defaultsTo: 'false',
    },
    test2: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    test3: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    test4: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
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
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
    },
    type: {
      type: 'string',
      enum: ['retail', 'reseller', 'enterprise', 'python'],
      defaultsTo: 'retail',
      columnName: 'pay_type',
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
      defaultsTo: false,
      columnName: 'feature_python',
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
    featurePdfReports: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'feature_pdf_reports',
    },
    featureGmb: {
      type: 'boolean',
      defaultsTo: false,
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
};

