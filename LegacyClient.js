'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'aclients',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      columnName: 'd1'
    },
    owner: {
      type: 'string',
      columnName: 'd2'
    },
    partner: {
      type: 'string',
      columnName: 'user'
    },
    street: {
      type: 'string',
      columnName: 'd3'
    },
    city: {
      type: 'string',
      columnName: 'd4'
    },
    state: {
      type: 'string',
      columnName: 'd5'
    },
    zipcode: {
      type: 'string',
      columnName: 'd6'
    },

    phone: {
      type: 'string',
      columnName: 'd7'
    },
    fax: {
      type: 'string',
      columnName: 'd8'
    },

    website: {
      type: 'string',
      columnName: 'd9'
    },
    email: {
      type: 'string',
      columnName: 'd10'
    },

    facebook: {
      type: 'string',
      columnName: 'd29'
    },
    twitter: {
      type: 'string',
      columnName: 'd30'
    },
    linkedin: {
      type: 'string',
      columnName: 'd31'
    },

    years: {
      type: 'integer',
      columnName: 'd11'
    },
    description: {
      type: 'integer',
      columnName: 'd12'
    },
    payment: {
      type: 'string',
      columnName: 'd13'
    },
    hours: {
      type: 'string',
      columnName: 'd14'
    },
    services: {
      type: 'string',
      columnName: 'd15'
    },
    license: {
      type: 'string',
      columnName: 'd16'
    },

    keyword1: {
      type: 'string',
      columnName: 'd17'
    },
    keyword2: {
      type: 'string',
      columnName: 'd18'
    },
    keyword3: {
      type: 'string',
      columnName: 'd19'
    },
    keyword4: {
      type: 'string',
      columnName: 'd20'
    },
    keyword5: {
      type: 'string',
      columnName: 'd21'
    },

    keyword1_location: {
      type: 'string',
      columnName: 'd17_location'
    },
    keyword2_location: {
      type: 'string',
      columnName: 'd18_location'
    },
    keyword3_location: {
      type: 'string',
      columnName: 'd19_location'
    },
    keyword4_location: {
      type: 'string',
      columnName: 'd20_location'
    },
    keyword5_location: {
      type: 'string',
      columnName: 'd21_location'
    },
    notes: {
      type: 'string',
      columnName: 'd25'
    },
    hide: {
      type: 'boolean',
      columnName: 'hide_address'
    },
    deleted: {
      type: 'string',
      enum: ['false','true']
    },
    createdAt: {
      type: 'datetime',
      columnName: 'since'
    },
    LAT: {
      type: 'float'
    },
    LON: {
      type: 'float'
    }
  }
};  

