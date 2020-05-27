'use strict';

let directoryModel = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    product: {
      type: 'string',
      unique: true,
    },
    website: {
      type: 'string',
      required: true,
      url: true,
    },
    logo: {
      type: 'string',
    },
    module: {
      type: 'string',
      unique: true,
      required: true,
    },
    moduleLogic: {
      type: 'string',
      required: true,
      defaultsTo: 'native',
      enum: ['native', 'generic', 'scantool'],
    },
    moduleOption: {
      type: 'string',
    },
    country: {
      type: 'string',
      required: true,
      enum: [
        'US',
        'GB',
        'CA',
        'AU',
        'DE',
        'NZ',
      ],
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true,
    },
    highFrequencyInterval: {
      type: 'string',
      required: true,
      enum: [
        'day',
        'week',
        'month',
      ],
      defaultsTo: 'week',
    },
    highFrequency: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },
    lowFrequencyInterval: {
      type: 'string',
      required: true,
      enum: [
        'day',
        'week',
        'month',
      ],
      defaultsTo: 'week',
    },
    lowFrequency: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },
    reportingList: {
      collection: 'reportingList',
      via: 'directories',
    },
    description: {
      type: 'string',
    },
    executionTime: {
      type: 'integer',
      integer: true,
      defaultsTo: 60,
    },
    optimized: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};

module.exports = directoryModel;
