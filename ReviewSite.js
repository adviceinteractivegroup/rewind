'use strict';

let reviewSiteModel = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    website: {
      type: 'string',
      required: true,
      url: true,
    },
    logo: {
      type: 'string',
    },
    module: {
      type: 'string',
      unique: true,
      required: true,
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true,
    },
    description: {
      type: 'string',
    },
    product: {
      model: 'legacyproduct',
    },
    reportingList: {
      collection: 'reportingList',
      via: 'reviews',
    },

  },
};

module.exports = reviewSiteModel;
