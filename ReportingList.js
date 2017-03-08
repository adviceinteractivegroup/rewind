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
    },
  },
};

module.exports = model;
