'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'fulfillment_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    partner: {
      model: 'legacypartner',
      columnName: 'partner_id',
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
    },
    order: {
      model: 'legacyorder',
      columnName: 'order_id',
    },
    product: {
      model: 'legacyproduct',
      columnName: 'product_id',
    },
    directory: {
      type: 'string',
    },
    statusInitial: {
      type: 'string',
      enum: ['not_present', 'present', 'claimed'],
      columnName: 'initial_status',
      defaultsTo: 'not_present',
    },
    url: {
      type: 'string',
      columnName: 'live_url',
    },
    screenshotUrl: {
      type: 'string',
      columnName: 'screenshot_url',
    },
    status: {
      type: 'string',
      enum: ['initial', 'existing', 'added_not_claimed', 'added_claimed', 'pending', 'pin_email', 'pin_phone', 'pin_postcard', 'temporary_problem', 'not_interested', 'critical_problem', 'active'],
      defaultsTo: 'initial',
    },
    comment: {
      type: 'string',
    },
    commentCustom: {
      type: 'string',
      columnName: 'comment_custom',
    },
    dateScreenshot: {
      type: 'datetime',
      columnName: 'timestamp_screenshot_url',
    },
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    recoveryPhone: {
      type: 'string',
      columnName: 'recovery_phone',
    },
    recoveryEmail: {
      type: 'string',
      columnName: 'recovery_email',
    },
    fulfillmentUser: {
      type: 'string',
      columnName: 'fulfillment_user',
    },

    dateStarted: {
      type: 'datetime',
      columnName: 'date_started',
    },
    dateEnded: {
      type: 'datetime',
      columnName: 'date_ended',
    },
    dateReplaced: {
      type: 'datetime',
      columnName: 'date_replaced',
    },
    dateCreated: {
      type: 'datetime',
      columnName: 'date_created',
    },
    dateUrl: {
      type: 'datetime',
      columnName: 'date_url',
    },
    dateUpdated: {
      type: 'datetime',
      columnName: 'date_updated',
    },
    dateVerified: {
      type: 'datetime',
      columnName: 'date_verified',
    },
    type: {
      type: 'string',
      enum: ['manual', 'api'],
      required: true,
      columnName: 'fulfillment_type',
    },
    isDisabled: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'disabled',
    },
  },
};

