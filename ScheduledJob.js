'use strict';
/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this mo
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    frequency: {
      type: 'string',
      required: true
    },
    command: {
      type: 'string',
      required: true
    }
  }
};
