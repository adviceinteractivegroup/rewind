'use strict';

let md5 = require('md5');

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'aclients',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    name: {
      type: 'string',
      columnName: 'd1',
      required: true,
    },
    owner: {
      type: 'string',
      columnName: 'd2',
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id_fix',
      required: true,
    },
    partnerUsername: {
      type: 'string',
      columnName: 'user',
      required: true,
    },
    gmb_token: {
      model: 'gmbtoken',
      columnName: 'gmb_token_id',
    },
    gmb_location: {
      type: 'string',
      columnName: 'gmb_location',
    },
    street: {
      type: 'string',
      columnName: 'd3',
      required: true,
    },
    suite: {
      type: 'string',
      columnName: 'suite',
    },
    hours: {
      type: 'string',
      columnName: 'd14',
    },
    hoursObject: {
      type: 'json',
    },
    hoursSpecialObject: {
      type: 'json',
    },
    city: {
      type: 'string',
      columnName: 'd4',
      required: true,
    },
    state: {
      type: 'string',
      columnName: 'd5',
      required: true,
    },
    zipcode: {
      type: 'string',
      columnName: 'd6',
      required: true,
    },
    phone: {
      type: 'string',
      columnName: 'd7',
      required: true,
    },
    phoneAlt: {
      type: 'string',
      columnName: 'additional_phone_numbers',
    },
    fax: {
      type: 'string',
      columnName: 'd8',
    },

    website: {
      type: 'string',
      columnName: 'd9',
    },
    email: {
      type: 'string',
      columnName: 'd10',
    },

    facebook: {
      type: 'string',
      columnName: 'd29',
    },
    twitter: {
      type: 'string',
      columnName: 'd30',
    },
    linkedin: {
      type: 'string',
      columnName: 'd31',
    },

    years: {
      type: 'integer',
      columnName: 'd11',
    },
    description: {
      type: 'string',
      columnName: 'd12',
    },
    payment: {
      type: 'string',
      columnName: 'd13',
    },
    services: {
      type: 'string',
      columnName: 'd15',
    },
    license: {
      type: 'string',
      columnName: 'd16',
    },

    keyword1: {
      type: 'string',
      columnName: 'd17',
    },
    keyword2: {
      type: 'string',
      columnName: 'd18',
    },
    keyword3: {
      type: 'string',
      columnName: 'd19',
    },
    keyword4: {
      type: 'string',
      columnName: 'd20',
    },
    keyword5: {
      type: 'string',
      columnName: 'd21',
    },

    keyword1_location: {
      type: 'string',
      columnName: 'd17_location',
    },
    keyword2_location: {
      type: 'string',
      columnName: 'd18_location',
    },
    keyword3_location: {
      type: 'string',
      columnName: 'd19_location',
    },
    keyword4_location: {
      type: 'string',
      columnName: 'd20_location',
    },
    keyword5_location: {
      type: 'string',
      columnName: 'd21_location',
    },
    notes: {
      type: 'string',
      columnName: 'd25',
    },
    hide: {
      type: 'string',
      columnName: 'hide_address',
      enum: ['false', 'true'],
      defaultsTo: 'false',
    },
    deleted: {
      type: 'string',
      enum: ['false', 'true'],
    },
    isInactive: {
      type: 'boolean',
      columnName: 'inactive',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'since',
      defaultsTo: function() {
 return new Date();
},
    },
    deletedAt: {
      type: 'datetime',
      columnName: 'date_deleted',
    },
    inactiveAt: {
      type: 'datetime',
      columnName: 'date_inactive',
    },
    LAT: {
      type: 'float',
    },
    LON: {
      type: 'float',
    },

    custom1: {
      type: 'string',
      columnName: 'fkc1',
    },
    custom2: {
      type: 'string',
      columnName: 'fkc2',
    },
    custom3: {
      type: 'string',
      columnName: 'fkc3',
    },
    custom4: {
      type: 'string',
      columnName: 'fkc4',
    },
    custom5: {
      type: 'string',
      columnName: 'fkc5',
    },
    status: {
      type: 'string',
      enum: ['Inactive', 'Widget Lead', 'Active', 'Paused'],
      defaultsTo: 'Inactive',
    },
    country: {
      type: 'string',
      defaultsTo: 'US',
    },
    orders: {
      type: 'integer',
    },
    publicKey: {
      type: 'string',
      columnName: 'public',
    },
    categoryGoogle: {
      type: 'string',
      columnName: 'google_category_id',
    },
    extra: {
      type: 'json',
    },
  },
  beforeCreate: function(values, cb) {
    if (!values.publicKey) {
      let hrtime = process.hrtime();
      values.publicKey = md5(hrtime + 'warpath forever!');
    }
    cb();
  },
};
