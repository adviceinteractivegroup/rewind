'use strict';

module.exports = {
  attributes: {
    emails: {
      type: 'json',
    },
    pdfReportsBucket: {
      type: 'string',
      required: true,
      unique: true,
      index: true,
    },
    pdfZipUrl: {
      type: 'string',
    },
    pdfLastUpdated: {
      type: 'string',
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