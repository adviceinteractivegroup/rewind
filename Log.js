'use strict';
/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this mo
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    level: {
      type: 'string',
      required: true,
      enum: ['error', 'info', 'debug', 'warn'],
      defaultsTo: 'error',
    },
    service: {
      type: 'string',
      required: true,
      index: true,
    },
    tag: {
      type: 'string',
      required: true,
      index: true,
    },
    data: {
      type: 'json',
    },
  },
};

