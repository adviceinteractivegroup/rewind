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
        'linkedin'
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

    client: {
      model: 'client',
      required: true
    }
  }
};
