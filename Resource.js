'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
    },
    data: {
      type: 'json',
      required: true,
      object: true,
    },
    limit: {
      type: 'integer',
      required: true,
      integer: true,
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
    },
    frequencyInterval: {
      type: 'integer',
      integer: true,
      defaultsTo: 1,
    },
    used: {
      type: 'integer',
      integer: true,
      defaultsTo: 0,
    },
    available: {
      type: 'integer',
      integer: true,
      defaultsTo: 0,
    },
    lastUsed: {
      type: 'datetime',
      datetime: true,
      defaultsTo: null,
    },
    lastReset: {
      type: 'datetime',
      datetime: true,
      defaultsTo: null,
    },
    nextReset: {
      type: 'datetime',
      datetime: true,
      defaultsTo: null,
    },
  },

  beforeUpdate(values, next) {
    if (values.used && values.limit && !values.available) {
      values.available = values.limit - values.used;
    }
    next();
  },

  beforeCreate(values, next) {
    values.available = values.limit;

    values.nextReset = new Date();
    next();
  },
};
