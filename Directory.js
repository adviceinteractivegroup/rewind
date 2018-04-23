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
    module: {
      type: 'string',
      unique: true,
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
    frequency: {
      type: 'string',
      required: true,
      enum: [
        'minute',
        'minutes',
        'hour',
        'hours',
        'day',
        'days',
        'week',
        'weeks',
        'month',
        'months',
        'year',
        'years',
      ],
      defaultsTo: 'week',
    },
    frequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },

    pendingFrequency: {
      type: 'string',
      required: true,
      enum: [
        'minute',
        'minutes',
        'hour',
        'hours',
        'day',
        'days',
        'week',
        'weeks',
        'month',
        'months',
        'year',
        'years',
      ],
      defaultsTo: 'days',
    },
    pendingFrequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 2,
    },

    foundFrequency: {
      type: 'string',
      required: true,
      enum: [
        'minute',
        'minutes',
        'hour',
        'hours',
        'day',
        'days',
        'week',
        'weeks',
        'month',
        'months',
        'year',
        'years',
      ],
      defaultsTo: 'month',
    },
    foundFrequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },

    successFrequency: {
      type: 'string',
      required: true,
      enum: [
        'minute',
        'minutes',
        'hour',
        'hours',
        'day',
        'days',
        'week',
        'weeks',
        'month',
        'months',
        'year',
        'years',
      ],
      defaultsTo: 'month',
    },
    successFrequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 2,
    },
    reportingList: {
      collection: 'reportingList',
    },
    description: {
      type: 'string',
    },
  },
};

module.exports = directoryModel;
