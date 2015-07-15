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
      model: 'directory',
      required: true
    }
  }
};

module.exports = model;
