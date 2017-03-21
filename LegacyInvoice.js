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
      autoIncrement: true
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
    dateStarting: {
      type: 'datetime',
      columnName: 'invoice_date',
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

