'use strict';
/**
* Email.js
*
* @description :: TODO: You might write a short summary of how this
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    projectId: {
      type: 'integer',
      required: true,
      index: true
    },
    email: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      enum: ['mandrill','ses'],
      defaultsTo: 'mandrill'
    }
  }
};

