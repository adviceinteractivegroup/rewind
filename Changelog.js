'use strict';

module.exports = {
  attributes: {
    type: {
      type: 'string',
      required: true
    },
    legacypartner: {
      model: 'legacypartner'
    },
    legacyclient: {
      model: 'legacyclient'
    },
    user: {
      model: 'user'
    },
    client: {
      model: 'client'
    },
    agency: {
      model: 'agency'
    },
    diff: {
      type: 'json',
      required: true
    }
  }
};  
