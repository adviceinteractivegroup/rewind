'use strict';
/**
* EmailPassword.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    projectId: {
      type: 'integer',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
};

