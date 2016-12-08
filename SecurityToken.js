'use strict';

var md5 = require('md5');

module.exports = {
  attributes: {
    legacypartner: {
      model: 'legacypartner',
      required: true
    },
    user: {
      model: 'user',
      required: true
    },
    token: {
      type: 'string'
    },
    usedAt: {
      type: 'datetime'
    }
  },
  beforeCreate: function (values, cb) {
      var hrtime = process.hrtime();
      values.token = md5(hrtime + "no more admin logins");
      cb();
  }
};  
