'use strict';

let md5 = require('md5');

module.exports = {
  connection: 'mysql',
  tableName: 'partners_keys',
  attributes: {
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    hash: {
      type: 'string',
    },
    ipaddr: {
      type: 'string',
      required: true,
      columnName: 'ip_addr'
    },
  },

  beforeCreate: function(values, cb) {
    let hrtime = process.hrtime();
    values.hash = "tk_" + md5(hrtime + 'warpath forever!');
    cb();
  }
};
