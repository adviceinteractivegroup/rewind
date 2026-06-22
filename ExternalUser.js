'use strict';

// Whitelist of external (non-@advicelocal.com / non-@adviceinteractive.com)
// users permitted to log into the Wall via Google SSO. Role gates what they
// can access: 'all' = full Wall access, 'fulfillment' = fulfillment + client
// views only. Internal-domain users are unaffected by this table.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'external_users',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'external_user_id',
    },
    email: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
      enum: ['all', 'fulfillment'],
      defaultsTo: 'fulfillment',
    },
    active: {
      type: 'boolean',
      defaultsTo: true,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
    },
  },

  beforeCreate: function(values, cb) {
    if (values.email) {
      values.email = values.email.toLowerCase().trim();
    }
    if (!values.createdAt) {
      values.createdAt = new Date();
    }
    cb();
  },

  beforeUpdate: function(values, cb) {
    if (values.email) {
      values.email = values.email.toLowerCase().trim();
    }
    cb();
  },
};
