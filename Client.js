'use strict';

module.exports = {
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
    phone: {
      type: 'string',
      required: true
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    },
    clientId: {
      type: 'integer',
      int: true,
      index: true
    },

    agency: {
      'model': 'agency',
      required: true
    },

    keywords: {
      collection: 'keyword',
      via: 'client'
    },
    socials: {
      collection: 'social',
      via: 'client'
    },
    competitors: {
      collection: 'clientCompetitor',
      via: 'client'
    },
    reportingLists: {
      collection: 'clientReportingList',
      via: 'client'
    },
    links: {
      collection: 'clientLink',
      via: 'client'
    }
  }
};
