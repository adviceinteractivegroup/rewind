'use strict';

let crypto = require('crypto');

// Short-lived, single-use tokens minted by an internal Wall employee to let
// them redeem a full partner login session ("log in preview") without
// knowing the partner's password. See PartnerPreviewTokenController in
// warpath: `create` mints the token, `redeem` exchanges it (once) for a
// LegacyPartnerKey session, mirroring AuthController.loginPartner's response.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'partner_preview_tokens',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'id',
    },
    legacypartner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    user: {
      model: 'user',
      columnName: 'user_id',
    },
    token: {
      type: 'string',
      unique: true,
    },
    expiresAt: {
      type: 'datetime',
      required: true,
      columnName: 'expires_at',
    },
    usedAt: {
      type: 'datetime',
      columnName: 'used_at',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
    },
  },

  beforeCreate: function(values, cb) {
    values.token = crypto.randomBytes(32).toString('hex');
    if (!values.createdAt) {
      values.createdAt = new Date();
    }
    cb();
  },
};
