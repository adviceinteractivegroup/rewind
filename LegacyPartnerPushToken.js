'use strict';

module.exports = {
  connection: 'mysql',
  tableName: 'partner_push_tokens',
  attributes: {
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    token: {
      type: 'string',
      required: true,
    },
    platform: {
      type: 'string',
      enum: ['ios', 'android', 'web', 'unknown'],
      defaultsTo: 'unknown',
    },
  },
};
