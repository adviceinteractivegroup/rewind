'use strict';

// Review Responder campaign template ("saved campaign"). Four starter templates
// are created per client on first use (is_seeded = 1).
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_saved_campaigns',
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
      required: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'text',
    },
    campaignType: {
      type: 'string',
      columnName: 'campaign_type',
      defaultsTo: 'STANDARD',
    },
    instruction: {
      type: 'text',
    },
    // JSON stored as text (ratingGuidance, reviewFilters, settings).
    ratingGuidance: {
      type: 'text',
      columnName: 'rating_guidance',
    },
    brandVoiceId: {
      type: 'integer',
      columnName: 'brand_voice_id',
    },
    reviewFilters: {
      type: 'text',
      columnName: 'review_filters',
    },
    settings: {
      type: 'text',
    },
    isSeeded: {
      type: 'boolean',
      columnName: 'is_seeded',
      defaultsTo: false,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
      defaultsTo: function() {
        return new Date();
      },
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_at',
      defaultsTo: function() {
        return new Date();
      },
    },
  },
};
