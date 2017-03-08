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
    clientId: {
      type: 'integer',
      required: true,
    },
    orderId: {
      type: 'integer',
      required: true,
    },
    amount: {
      type: 'integer',
      required: true,
    },
    description: {
      type: 'string',
    },
    statementDescription: {
      type: 'string',
    },
    chargeId: {
      type: 'string',
      required: true,
    },
  },
};

