'use strict';

// Review Responder brand voice profile (tone, always/never rules, signature).
// Three starter profiles are created per client on first use (is_seeded = 1).
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_brand_voices',
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
    voice: {
      type: 'string',
      defaultsTo: 'friendly',
    },
    // JSON stored as text.
    toneControls: {
      type: 'text',
      columnName: 'tone_controls',
    },
    alwaysRules: {
      type: 'text',
      columnName: 'always_rules',
    },
    neverRules: {
      type: 'text',
      columnName: 'never_rules',
    },
    requiredPhrases: {
      type: 'text',
      columnName: 'required_phrases',
    },
    prohibitedWords: {
      type: 'text',
      columnName: 'prohibited_words',
    },
    signature: {
      type: 'string',
    },
    teamName: {
      type: 'string',
      columnName: 'team_name',
    },
    managerName: {
      type: 'string',
      columnName: 'manager_name',
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
