'use strict';

module.exports = {
  attributes: {
    provider: {
      required: true,
      type: 'string',
      enum: [
        'google',
        'twitter',
        'facebook',
        'linkedin'
      ]
    },
    data: {
      type: 'json',
      object: true
    },
    error: {
      type: 'string',
      defaultsTo: null
    },
    queueTime: {
      type: 'datetime',
      defaultsTo: null
    },
    startTime: {
      type: 'datetime',
      defaultsTo: null
    },
    endTime: {
      type: 'datetime',
      defaultsTo: null
    },

    social: {
      model: 'social'
    },
    client: {
      model: 'client'
    }
  }
};
