'use strict';

let directoryModel = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    website: {
      type: 'string',
      required: true,
      url: true
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
        'NZ'
      ]
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true
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
        'years'
      ],
      defaultsTo: 'month'
    },
    frequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 1
    },

    reportingList: {
      collection: 'reportingList'
    }
  }
};

module.exports = directoryModel;
