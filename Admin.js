'use strict';

var md5 = require('md5');

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      index: true
    },
    token: {
      type: 'string',
      required: true,
      index: true
    }
  }
};  
