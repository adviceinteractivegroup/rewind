'use strict';

// Review Responder auto-responder run history: one row per cycle of a rule
// (rule_id into review_auto_rules). The column for `trigger` is run_trigger
// because TRIGGER is a reserved word in MySQL.
module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  tableName: 'review_auto_runs',
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
    ruleId: {
      type: 'integer',
      columnName: 'rule_id',
      required: true,
    },
    scanned: {
      type: 'integer',
      defaultsTo: 0,
    },
    candidates: {
      type: 'integer',
      defaultsTo: 0,
    },
    scheduled: {
      type: 'integer',
      defaultsTo: 0,
    },
    held: {
      type: 'integer',
      defaultsTo: 0,
    },
    skipped: {
      type: 'integer',
      defaultsTo: 0,
    },
    capReached: {
      type: 'boolean',
      columnName: 'cap_reached',
      defaultsTo: false,
    },
    trigger: {
      type: 'string',
      columnName: 'run_trigger',
      defaultsTo: 'INTERVAL',
    },
    error: {
      type: 'text',
    },
    durationMs: {
      type: 'integer',
      columnName: 'duration_ms',
      defaultsTo: 0,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
      defaultsTo: function() {
        return new Date();
      },
    },
  },
};
