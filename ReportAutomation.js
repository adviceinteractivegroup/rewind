'use strict';

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'report_automation',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: 'string',
      required: true,
    },
    message: {
      type: 'string',
    },
    reportType: {
      type: 'string',
      required: true,
      columnName: 'report_type',
    },
    reportFor: {
      type: 'string',
      enum: ['partner', 'client'],
      columnName: 'report_for',
    },
    frequency: {
      type: 'string',
      required: true,
    },
    partnerId: {
      type: 'string',
      required: true,
      columnName: 'partner_id',
    },
    clientId: {
      type: 'integer',
      columnName: 'client_id',
    },
    time: {
      type: 'string',
    },
    emailDomain: {
      type: 'string',
      columnName: 'email_domain',
    },
    reportSelection: {
      type: 'string',
      columnName: 'report_selection',
    },
  },
};
