'use strict';
/**
* Email.js
*
* @description :: TODO: You might write a short summary of how this
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      index: true
    }
  }
};

