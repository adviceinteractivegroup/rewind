'use strict';

module.exports = {

  attributes: {
    user: {
      model: 'user',
      required: true
    },
    ipAddress: {
      type: 'string'
    },
    usedAt: {
      type: 'datetime'
    }
  }

};
