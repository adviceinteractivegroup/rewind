'use strict';

var md5 = require('md5');

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      index: true
    },
    apiKey: {
      type: 'string',
      required: true,
      index: true
    }
  }
};  
