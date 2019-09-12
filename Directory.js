'use strict';

let directoryModel = {
  attributes: {
    name: {
      type: 'string',
      required: true,
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
      enum: ['native', 'generic', 'native-generic', 'generic-native'],
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
    highFrequency: {
      type: 'string',
      required: true,
      enum: [
        'day',
        'week',
        'month',
      ],
      defaultsTo: 'week',
    },
    highFrequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },
    lowFrequency: {
      type: 'string',
      required: true,
      enum: [
        'day',
        'week',
        'month',
      ],
      defaultsTo: 'week',
    },
    lowFrequencyInterval: {
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
    product: {
      model: 'legacyproduct',
    },
  },
};

module.exports = directoryModel;
