'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'invoices',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'invoice_id'
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id'
    },
    datePaid: {
      type: 'datetime',
      columnName: 'paid_date'
    },
    dateAttempted: {
      type: 'datetime',
      columnName: 'attempt_date'
    },
    dateStarting: {
      type: 'datetime',
      columnName: 'invoice_date'
    },
    data: {
      type: 'json'
    },
    paid: {
      type: 'boolean',
      defaultsTo: false
    },
    notes: {
      type: 'text'
    },

    totalServices: {
      type: 'float',
      required: true,
      columnName: 'total_services'
    },
    totalReporting: {
      type: 'float',
      required: true,
      columnName: 'total_reporting'
    },
    totalMaintenance: {
      type: 'float',
      required: true,
      columnName: 'total_maintenance'
    },
    total: {
      type: 'float',
      required: true,
      columnName: 'total_grand'
    },
    totalAdjustments: {
      type: 'float',
      columnName: 'total_adjustments'
    }

  }
};  

