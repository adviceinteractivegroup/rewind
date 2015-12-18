'use strict';

let model = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    isGlobal: {
      type: 'boolean',
      defaultsTo: true
    },

    agency: {
      model: 'agency'
    },

    directories: {
      collection: 'directory',
      dominant: true
    }
  }
};

module.exports = model;
