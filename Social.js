'use strict';

module.exports = {
  attributes: {
    provider: {
      type: 'string',
      required: true,
      enum: [
        'google',
        'twitter',
        'facebook',
        'linkedin',
        'foursquare'
      ]
    },
    link: {
      type: 'string',
      required: true,
      url: true
    },
    lastAttempt: {
      type: 'datetime',
      defaultsTo: null
    },
    lastSuccess: {
      type: 'datetime',
      defaultsTo: null
    },
    errorCount: {
      type: 'integer',
      defaultsTo: 0
    },
    invalid: {
      type: 'boolean',
      defaultsTo: false
    },

    client: {
      model: 'client',
      required: true
    }
  }
};
