'use strict';
/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this mo
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    params: {
      type: 'json'
    },
    when: {
      type: 'string',
      enum: ['daily_begin','daily_end','weekly_begin','weekly_end','monthly'],
      defaultsTo: 'daily_end',
      required: true
    }
  }
};
