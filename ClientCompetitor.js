'use strict';

let model = {
  attributes: {
    businessName: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    street1: {
      type: 'string'
    },
    street2: {
      type: 'string'
    },
    state: {
      type: 'string',
      required: true
    },
    postal: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      defaultsTo: 'US',
      enum: [
        'US',
        'GB',
        'CA',
        'AU',
        'DE',
        'NZ'
      ]
    },
    website: {
      type: 'string',
      url: true
    },
    baseScore: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },
    currentScore: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },

    client: {
      required: true,
      model: 'client'
    },

    directoryResults: {
      collection: 'directoryResult',
      via: 'competitor'
    }
  }
};

module.exports = model;
