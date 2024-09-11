'use strict';

let utf8 = require('utf8');

module.exports = {
  attributes: {
    businessName: {
      type: 'string',
      required: true,
    },
    city: {
      type: 'string',
      required: true,
    },
    street1: {
      type: 'string',
    },
    street2: {
      type: 'string',
    },
    state: {
      type: 'string',
      required: true,
    },
    postal: {
      type: 'string',
      required: true,
    },
    country: {
      type: 'string',
      defaultsTo: 'US',
      enum: [
        'US',
        'GB',
        'CA',
        'AU',
        'BS',
        'DE',
        'NZ',
        'CR',
      ],
    },
    website: {
      type: 'string',
    },
    hours: {
      type: 'json',
    },
    hoursSpecial: {
      type: 'json',
    },
    description: {
      type: 'text',
    },
    hide: {
      type: 'boolean',
      defaultsTo: false,
    },
    phone: {
      type: 'string',
    },
    phoneAlt: {
      type: 'string',
    },
    phoneMobile: {
      type: 'string',
    },
    fax: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    owner: {
      type: 'string',
    },
    payment: {
      type: 'string',
    },
    paymentObject: {
      type: 'json',
    },
    services: {
      type: 'string',
    },
    license: {
      type: 'string',
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true,
    },
    isDeleted: {
      type: 'boolean',
      defaultsTo: false,
    },
    urlYoutube: {
      type: 'string'
    },
    urlInstagram: {
      type: 'string'
    },
    urlYelp: {
      type: 'string'
    },
    years: {
      type: 'integer',
    },
     clientId: {
      type: 'integer',
      int: true,
      index: true,
      unique: true,
    },
    legacyClient: {
      model: 'legacyclient',
    },
    LAT: {
      type: 'float',
    },
    LON: {
      type: 'float',
    },
    agency: {
      'model': 'agency',
      'index': true,
    },
    category: {
      type: 'text',
    },
    categories: {
      type: 'json',
    },
    keywords: {
      collection: 'keyword',
      via: 'client',
    },
    socials: {
      collection: 'social',
      via: 'client',
    },
    competitors: {
      collection: 'clientCompetitor',
      via: 'client',
    },
    reportingLists: {
      collection: 'clientReportingList',
      via: 'client',
    },
    links: {
      collection: 'clientLink',
      via: 'client',
    },

    submissions: {
      type: 'json',
    },
    scans: {
      type: 'json',
    },

    gmbLocation: {
      type: 'string',
    },
    gmbAccount: {
      type: 'string',
    },

    custom1: {
      type: 'string',
      index: true,
    },
    custom2: {
      type: 'string',
      index: true,
    },
    custom3: {
      type: 'string',
      index: true,
    },
    custom4: {
      type: 'string',
      index: true,
    },
    custom5: {
      type: 'string',
      index: true,
    },
    status: {
      type: 'string',
      index: true,
    },
    tokenGoogle: {
      type: 'string',
    },
    multiLocation: {
      type: 'boolean',
    },
    extra: {
      type: 'json',
    },
    toJSON: function() {
      let obj = this.toObject();
      if (obj.businessName) {
        try {
          utf8.decode(obj.businessName);
          //obj.businessName = utf8.decode(obj.businessName);
        } catch (e) {
        }
      }
      if (obj.street1) {
        try {
          utf8.decode(obj.street1);
          //obj.street1 = utf8.decode(obj.street1);
        } catch (e) {
        }
      }
      if (obj.city) {
        try {
          utf8.decode(obj.city);
          //obj.city = utf8.decode(obj.city);
        } catch (e) {
        }
      }
      if (obj.description) {
        try {
          utf8.decode(obj.description);
          //obj.description = utf8.decode(obj.description);
        } catch (e) {
        }
      }
      return obj;
    },
  },
};
