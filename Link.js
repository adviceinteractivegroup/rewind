'use strict';

module.exports = {
  attributes: {
    link: {
      type: 'string',
      required: true,
      url: true,
      index: true,
      unique: true
    },
    forwardedTo: {
      type: 'string'
    },
    lastSuccess: {
      type: 'datetime',
      defaultsTo: null
    },
    lastActive: {
      type: 'datetime',
      defaultsTo: null
    },
    errorCount: {
      type: 'integer',
      defaultsTo: 0
    },
    checkCount: {
      type: 'integer',
      defaultsTo: 0
    },
    statusCode: {
      type: 'integer'
    },
    invalid: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
