'use strict';

module.exports = {
  attributes: {
    jobs: {
      type: 'integer',
      defaultsTo: 0,
      required: true
    },
    client: {
      model: 'client',
      index: true
    },
    data: {
      type: 'json'
    },
    description: {
      type: 'string'
    }
  }
};
