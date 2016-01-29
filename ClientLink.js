'use strict';

let model = {
  attributes: {
    link: {
      type: 'string',
      url: true,
      required: true
    },
    submissionDate: {
      type: 'datetime',
      defaultsTo: null
    },

    client: {
      model: 'client'
    },
    directory: {
      model: 'directory'
    }
  }
};

module.exports = model;
