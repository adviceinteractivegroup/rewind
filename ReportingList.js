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
    reviews: {
      collection: 'reviewsite',
      dominant: true,
      via: 'reportingList',
    },
    socials: {
      collection: 'socialsite',
      dominant: true,
      via: 'reportingList',
    },
  },
};

module.exports = model;
