'use strict';
/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this mo
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection: 'mysql',
	tableName: 'status',
  attributes: {
    application: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    recentChanges: {
      type: 'string',
      enum: ['BUG_FIXED', 'BUG_REPORTED', 'OUTAGE', 'OUTAGE_RESOLVED', 'FEATURE_UPDATE', 'NEW_FEATURE', 'ANNOUNCEMENT'],
    },
    version: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['OPERATIONAL', 'OUTAGE'],
    },
  },
};
