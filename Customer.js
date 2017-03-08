'use strict';

/**
* Charge.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    partnerId: {
      type: 'integer',
      required: true,
    },
    stripeId: {
      type: 'string',
    },
    email: {
      type: 'text',
      required: true,
    },
  },
};

