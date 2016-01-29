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
        'google',
        'googleLocal',
        'bing',
        'bingLocal',
        'yahoo',
        'yahooLocal'
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
    errorCount: {
      type: 'integer',
      defaultsTo: 0
    },
    invalid: {
      type: 'boolean',
      defaultsTo: false
    },

    client: {
      model: 'client'
    }
  }
};
