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
      url: true
    },
    partnerId: {
      type: 'int',
      required: true,
      int: true
    },

    parent: {
      model: 'agency'
    },

    modules: {
      collection: 'agencyModule',
      via: 'agency',
      required: true
    },
    reportingList: {
      collection: 'reportingList',
      via: 'agency'
    }
  }
};
