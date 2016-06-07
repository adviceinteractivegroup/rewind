'use strict';
/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this mo
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    params: {
      type: 'json',
      required: true
    },
    callback: {
      type: 'string'
    },
    callbackResponse: {
      type: 'string'
    },
    completedAt: {
      type: 'datetime'
    },
    completed: {
      type: 'boolean',
      defaultsTo: false,
      index: true
    },
    response: {
      type: 'string'
    },
    success: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

