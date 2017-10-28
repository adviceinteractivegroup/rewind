'use strict';

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      index: true,
    },
    url: {
      type: 'string',
      required: true,
    },
    refresh_token: {
      type: 'string',
      required: true,
    },
    location: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['Pending', 'GmbTab', 'GmbBulk'],
      defaultsTo: 'Pending',
    },
  },
};
