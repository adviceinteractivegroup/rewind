'use strict';

// Review Responder campaign: one instruction that generates replies for many
// reviews. client_id is the client the campaign was created under. Links to the
// other review_* tables are plain integer ids (brand_voice_id, saved_campaign_id,
// auto_rule_id). Status-like fields are plain strings on purpose: their value
// lists are still growing, so they are varchar columns rather than enums.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_campaigns',
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
    status: {
      type: 'string',
      defaultsTo: 'DRAFT',
    },
    campaignType: {
      type: 'string',
      columnName: 'campaign_type',
      defaultsTo: 'STANDARD',
    },
    instruction: {
      type: 'text',
    },
    template: {
      type: 'text',
    },
    brandVoice: {
      type: 'string',
      columnName: 'brand_voice',
      defaultsTo: 'friendly',
    },
    responseLength: {
      type: 'string',
      columnName: 'response_length',
      defaultsTo: 'medium',
    },
    useReviewerName: {
      type: 'boolean',
      columnName: 'use_reviewer_name',
      defaultsTo: true,
    },
    allowEmojis: {
      type: 'boolean',
      columnName: 'allow_emojis',
      defaultsTo: false,
    },
    approvalMode: {
      type: 'string',
      columnName: 'approval_mode',
      defaultsTo: 'REVIEW_EVERY',
    },
    publishMode: {
      type: 'string',
      columnName: 'publish_mode',
      defaultsTo: 'MANUAL',
    },
    scheduledAt: {
      type: 'datetime',
      columnName: 'scheduled_at',
    },
    // JSON stored as text: the app writes and reads it as a string.
    reviewFilters: {
      type: 'text',
      columnName: 'review_filters',
    },
    backgroundState: {
      type: 'string',
      columnName: 'background_state',
      defaultsTo: 'IDLE',
    },
    totalLocations: {
      type: 'integer',
      columnName: 'total_locations',
      defaultsTo: 0,
    },
    totalReviews: {
      type: 'integer',
      columnName: 'total_reviews',
      defaultsTo: 0,
    },
    completedReviews: {
      type: 'integer',
      columnName: 'completed_reviews',
      defaultsTo: 0,
    },
    errorMessage: {
      type: 'text',
      columnName: 'error_message',
    },
    brandVoiceId: {
      type: 'integer',
      columnName: 'brand_voice_id',
    },
    // JSON stored as text.
    ratingGuidance: {
      type: 'text',
      columnName: 'rating_guidance',
    },
    savedCampaignId: {
      type: 'integer',
      columnName: 'saved_campaign_id',
    },
    // Set only on the auto-responder's own campaign (campaign_type 'AUTO').
    autoRuleId: {
      type: 'integer',
      columnName: 'auto_rule_id',
    },
    similarityThreshold: {
      type: 'integer',
      columnName: 'similarity_threshold',
    },
    languageMode: {
      type: 'string',
      columnName: 'language_mode',
      defaultsTo: 'ENGLISH',
    },
    fixedLanguage: {
      type: 'string',
      columnName: 'fixed_language',
    },
    archivedAt: {
      type: 'datetime',
      columnName: 'archived_at',
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
