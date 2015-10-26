'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      enum: [
        'keywords',
        'social',
        'directories'
      ]
    },
    enabled: {
      type: 'boolean',
      defaultsTo: false
    },

    agency: {
      model: 'agency'
    }
  }
};
