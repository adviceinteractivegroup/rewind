'use strict';

let md5 = require('md5');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      index: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    salt: {
      type: 'string',
    },
    agency: {
      model: 'agency',
    },
    type: {
      type: 'string',
      enum: ['agency', 'fulfillment', 'support', 'admin', 'sales', 'agent', 'manager', 'internal'],
      required: true,
    },
    permissions: {
      type: 'json',
    },
    isVerified: {
      type: 'boolean',
      defaultsTo: false,
    },
    isEnabled: {
      type: 'boolean',
      defaultsTo: false,
    },
    team: {
      model: 'team',
    },
    toJSON: function() {
      let obj = this.toObject();
      delete obj.password;
      delete obj.salt;
      return obj;
    },
  },
  beforeCreate: function(values, cb) {
    if (!values.salt) {
      let hrtime = process.hrtime();
      values.salt = md5(hrtime + 'warpath forever!');
    }
    cb();
  },

};
