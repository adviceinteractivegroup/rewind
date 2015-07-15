'use strict';

module.exports = {
  attributes: {
    searchTerm: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      defaultsTo: null
    },
    provider: {
      type: 'string',
      required: true,
      enum: [
        'georanker',
        'yahoo-local',
        'bing-local'
      ]
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
