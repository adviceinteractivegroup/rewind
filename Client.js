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
      type: 'string'
    },
    hide: {
      type: 'boolean',
      defaultsTo: false
    },
    phone: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string'
    },
    owner: {
      type: 'string'
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
    LAT: {
      type: 'float'
    },
    LON: {
      type: 'float'
    },
    agency: {
      'model': 'agency',
      index: true
    },
    category: {
      type: 'text'
    },
    categories: {
      type: 'json'
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
    },

    custom1: {
      type: 'string',
      index: true
    },
    custom2: {
      type: 'string',
      index: true
    },
    custom3: {
      type: 'string',
      index: true
    },
    custom4: {
      type: 'string',
      index: true
    },
    custom5: {
      type: 'string',
      index: true
    },
    status: {
      type: 'string',
      index: true
    }

  }
};
