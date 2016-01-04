'use strict';

module.exports = {
  attributes: {
    jobs: {
      type: 'integer',
      required: true
    },
    client: {
      model: 'client',
      index: true
    },
    data: {
      type: 'json'
    }
  }
};
