'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'invoices',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'invoice_id',
      autoIncrement: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    datePaid: {
      type: 'datetime',
      columnName: 'paid_date',
    },
    dateAttempted: {
      type: 'datetime',
      columnName: 'attempt_date',
    },
    dateAttempted2: {
      type: 'datetime',
      columnName: 'attempt_date_2',
    },
    dateAttempted3: {
      type: 'datetime',
      columnName: 'attempt_date_3',
    },
    dateStarting: {
      type: 'datetime',
      columnName: 'invoice_date',
    },
    dateUpdated: {
      type: 'datetime',
      columnName: 'date_updated',
    },
    dateGenerated: {
      type: 'datetime',
      columnName: 'date_generated',
    },
    url: {
      type: 'string',
    },
    urlRecalc: {
      type: 'string',
      columnName: 'url_recalc',
    },
    data: {
      type: 'json',
    },
    paid: {
      type: 'string',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    notes: {
      type: 'text',
    },

    totalDrip: {
      type: 'float',
      required: true,
      columnName: 'total_drip',
    },
    totalServices: {
      type: 'float',
      required: true,
      columnName: 'total_services',
    },
    totalReporting: {
      type: 'float',
      required: true,
      columnName: 'total_reporting',
    },
    totalMaintenance: {
      type: 'float',
      required: true,
      columnName: 'total_maintenance',
    },
    totalMaintenanceRecalc: {
      type: 'float',
      columnName: 'total_maintenance_recalc',
    },
    totalRenewals: {
      type: 'float',
      required: true,
      columnName: 'total_renewals',
    },
    totalMembership: {
      type: 'float',
      required: true,
      columnName: 'total_membership',
    },
    total: {
      type: 'float',
      required: true,
      columnName: 'total_grand',
    },
    totalRecalc: {
      type: 'float',
      columnName: 'total_grand_recalc',
    },
    chargeId: {
      type: 'string',
      columnName: 'charge_id',
    },
    totalAdjustments: {
      type: 'float',
      columnName: 'total_adjustments',
    },

  },
};

