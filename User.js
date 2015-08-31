'use strict';

var md5 = require('md5');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      email: true
    },
    password: {
      type: 'string',
      required: true
    },
    salt: {
      type: 'string',
      required: true
    },
    agency: {
      model: 'agency',
      required: false
    },
    type: {
      type: 'string',
      enum: ['agency','fulfillment','support','admin'],
      required: true
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.salt;
      return obj;
    }
  },
  beforeCreate: function (values, cb) {
    var hrtime = process.hrtime();
    values.salt = md5.digest_s(hrtime + "warpath forever!");
    cb();
  }

};
