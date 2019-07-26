'use strict';

module.exports = {
  attributes: {
    partner: {
      model: 'legacypartner',
    },
    reportCycle: {
      type: 'string',
    },
    pdfReportsBucket: {
      type: 'string',
      required: true,
      unique: true,
      index: true,
    },
    zipUrl: {
      type: 'string',
    },
    emails: {
      type: 'json',
    },
    pdfLastRequested: {
      type: 'string',
    },
    pdfLastUpdated: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['ready', 'processing', 'suspended', 'done'],
      defaultsTo: 'ready',
    },
  },
};
