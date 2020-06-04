'use strict';

let model = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    isGlobal: {
      type: 'boolean',
      defaultsTo: true,
    },
    isDefault: {
      type: 'boolean',
      defaultsTo: false,
    },
    agency: {
      model: 'agency',
    },
    directories: {
      collection: 'directory',
      dominant: true,
      via: 'reportingList',
    },
    reviewsites: {
      collection: 'reviewsite',
      dominant: true,
      via: 'reportingList',
    },
    socialsites: {
      collection: 'socialsite',
      dominant: true,
      via: 'reportingList',
    },
    partnerCount: {
      type: 'number',
    },
  },
};

module.exports = model;
