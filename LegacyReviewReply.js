'use strict';

// Review Responder reply: one generated, edited, scheduled or published reply to
// one review. client_id is the client the campaign was created under;
// source_client_id is the location that actually owns the review. review_id is
// the review's id as text. campaign_id and auto_rule_id are plain integer ids
// into review_campaigns / review_auto_rules.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_replies',
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
    campaignId: {
      type: 'integer',
      columnName: 'campaign_id',
    },
    reviewId: {
      type: 'string',
      columnName: 'review_id',
      required: true,
    },
    provider: {
      type: 'string',
      defaultsTo: 'google',
    },
    clientName: {
      type: 'string',
      columnName: 'client_name',
    },
    locationCity: {
      type: 'string',
      columnName: 'location_city',
    },
    category: {
      type: 'string',
    },
    reviewRating: {
      type: 'integer',
      columnName: 'review_rating',
      required: true,
    },
    reviewText: {
      type: 'text',
      columnName: 'review_text',
    },
    reviewAuthor: {
      type: 'string',
      columnName: 'review_author',
    },
    reviewedAt: {
      type: 'datetime',
      columnName: 'reviewed_at',
    },
    sourceClientId: {
      type: 'integer',
      columnName: 'source_client_id',
    },
    reviewUrl: {
      type: 'text',
      columnName: 'review_url',
    },
    reviewKey: {
      type: 'string',
      columnName: 'review_key',
    },
    autoRuleId: {
      type: 'integer',
      columnName: 'auto_rule_id',
    },
    generatedResponse: {
      type: 'text',
      columnName: 'generated_response',
    },
    editedResponse: {
      type: 'text',
      columnName: 'edited_response',
    },
    // JSON stored as text (resolvedSyntax, warnings, signals, sensitiveFlags,
    // postProcessFlags): the app writes and reads them as strings.
    resolvedSyntax: {
      type: 'text',
      columnName: 'resolved_syntax',
    },
    confidence: {
      type: 'integer',
    },
    warnings: {
      type: 'text',
    },
    signals: {
      type: 'text',
    },
    sensitiveFlags: {
      type: 'text',
      columnName: 'sensitive_flags',
    },
    isAiGenerated: {
      type: 'boolean',
      columnName: 'is_ai_generated',
      defaultsTo: true,
    },
    status: {
      type: 'string',
      defaultsTo: 'QUEUED',
    },
    editReason: {
      type: 'string',
      columnName: 'edit_reason',
    },
    publishedReplyId: {
      type: 'string',
      columnName: 'published_reply_id',
    },
    scheduledAt: {
      type: 'datetime',
      columnName: 'scheduled_at',
    },
    publishedAt: {
      type: 'datetime',
      columnName: 'published_at',
    },
    lastError: {
      type: 'text',
      columnName: 'last_error',
    },
    lastErrorCode: {
      type: 'string',
      columnName: 'last_error_code',
    },
    publishAttempts: {
      type: 'integer',
      columnName: 'publish_attempts',
      defaultsTo: 0,
    },
    lastAttemptAt: {
      type: 'datetime',
      columnName: 'last_attempt_at',
    },
    similarityScore: {
      type: 'integer',
      columnName: 'similarity_score',
    },
    openingHash: {
      type: 'string',
      columnName: 'opening_hash',
    },
    postProcessFlags: {
      type: 'text',
      columnName: 'post_process_flags',
    },
    reviewLanguage: {
      type: 'string',
      columnName: 'review_language',
    },
    backTranslation: {
      type: 'text',
      columnName: 'back_translation',
    },
    // ISO timestamp kept while a campaign is paused, so resume restores it.
    pausedFrom: {
      type: 'string',
      columnName: 'paused_from',
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
