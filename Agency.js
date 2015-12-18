'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    domain: {
      type: 'string',
      required: true,
      url: true,
      index: true,
      unique: true
    },
    domainCustomer: {
      type: 'string',
      url: true,
      index: true,
      unique: true
    },
    partnerId: {
      type: 'int',
      int: true,
      index: true
    },

    parent: {
      model: 'agency'
    },

    users: {
      collection: 'user',
      via: 'agency'
    },

    deactivated: {
      type: 'boolean',
      defaultsTo: false
    },

    modules: {
      collection: 'agencyModule',
      via: 'agency',
      required: true
    },
    reportingList: {
      collection: 'reportingList',
      via: 'agency'
    },
    type: {
      type: 'string',
      enum: ['retail','reseller','enterprise'],
      defaultsTo: 'retail'
    }
  }
};
