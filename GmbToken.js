'use strict';

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      index: true,
    },
    url: {
      type: 'string',
    },
    refresh_token: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['undefined', 'valid', 'invalid'],
      defaultsTo: 'undefined',
    },
  },
};
