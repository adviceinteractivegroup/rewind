'use strict';

// Review Responder always-on auto-responder: at most one rule per client
// (unique client_id). Drafts replies to new reviews; clean high-rated ones are
// scheduled, everything else is held for approval. No API key is stored here.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_auto_rules',
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
      defaultsTo: 'Auto-Responder',
    },
    enabled: {
      type: 'boolean',
      defaultsTo: false,
    },
    delayMinutes: {
      type: 'integer',
      columnName: 'delay_minutes',
      defaultsTo: 60,
    },
    processScope: {
      type: 'string',
      columnName: 'process_scope',
      defaultsTo: 'NEW_ONLY',
    },
    activeFrom: {
      type: 'datetime',
      columnName: 'active_from',
      defaultsTo: function() {
        return new Date();
      },
    },
    instruction: {
      type: 'text',
    },
    brandVoice: {
      type: 'string',
      columnName: 'brand_voice',
      defaultsTo: 'friendly',
    },
    brandVoiceId: {
      type: 'integer',
      columnName: 'brand_voice_id',
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
    // JSON stored as text (ratingGuidance, providers, locations).
    ratingGuidance: {
      type: 'text',
      columnName: 'rating_guidance',
    },
    minRating: {
      type: 'integer',
      columnName: 'min_rating',
      defaultsTo: 1,
    },
    providers: {
      type: 'text',
    },
    locations: {
      type: 'text',
    },
    autoPublishMinRating: {
      type: 'integer',
      columnName: 'auto_publish_min_rating',
      defaultsTo: 4,
    },
    confidenceFloor: {
      type: 'integer',
      columnName: 'confidence_floor',
      defaultsTo: 70,
    },
    dailyCap: {
      type: 'integer',
      columnName: 'daily_cap',
      defaultsTo: 50,
    },
    credentialMissing: {
      type: 'boolean',
      columnName: 'credential_missing',
      defaultsTo: false,
    },
    emergencyStoppedAt: {
      type: 'datetime',
      columnName: 'emergency_stopped_at',
    },
    runLockedAt: {
      type: 'datetime',
      columnName: 'run_locked_at',
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
    similarityThreshold: {
      type: 'integer',
      columnName: 'similarity_threshold',
    },
    lastRunAt: {
      type: 'datetime',
      columnName: 'last_run_at',
    },
    totalHandled: {
      type: 'integer',
      columnName: 'total_handled',
      defaultsTo: 0,
    },
    totalScheduled: {
      type: 'integer',
      columnName: 'total_scheduled',
      defaultsTo: 0,
    },
    totalHeld: {
      type: 'integer',
      columnName: 'total_held',
      defaultsTo: 0,
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
