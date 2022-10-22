'use strict';

let md5 = require('md5');

module.exports = {
  attributes: {
    legacypartner: {
      model: 'legacypartner',
      required: true,
    },
    user: {
      model: 'user',
    },
    organization: {
      model: 'legacyorganization',
    },
    token: {
      type: 'string',
    },
    usedAt: {
      type: 'datetime',
    },
  },
  beforeCreate: function(values, cb) {
      let hrtime = process.hrtime();
      values.token = md5(hrtime + 'no more admin logins');
      cb();
  },
};
