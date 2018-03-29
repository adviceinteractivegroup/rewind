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
    status: {
      type: 'string',
      enum: ['undefined', 'valid', 'invalid'],
      defaultsTo: 'undefined',
    },
  },
};
