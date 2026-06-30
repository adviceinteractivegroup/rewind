'use strict';

module.exports = {
  connection: 'mysql',
  tableName: 'partner_password_resets',
  attributes: {
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    email: {
      type: 'string',
      required: true,
    },
    code: {
      type: 'string',
      required: true,
    },
    expiresAt: {
      type: 'datetime',
      required: true,
      columnName: 'expires_at',
    },
  },
};
