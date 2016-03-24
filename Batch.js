'use strict';

module.exports = {
  attributes: {
    jobs: {
      type: 'integer',
      defaultsTo: 0,
      required: true
    },
    client: {
      model: 'client'
    },
    data: {
      type: 'json'
    },
    details: {
      type: 'json'
    },
    description: {
      type: 'string'
    }
  }
};
