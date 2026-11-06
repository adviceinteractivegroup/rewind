'use strict';

/**
 * SupportEmailTemplate
 *
 * The editable subject + HTML body a support desk sends for one notification
 * kind. One row per (project, kind); a missing row means "use the built-in
 * default", which is what the Wall shows until someone saves a custom version.
 *
 * Kinds:
 *   acknowledgement  sent to the requester when a ticket opens
 *   reply            sent to the requester on an outbound staff reply
 *   internal_alert   sent to the desk's notify_emails when a ticket opens
 *
 * The body is HTML with {{placeholders}} — ticket.number, ticket.subject,
 * ticket.status, ticket.priority, requester.name, requester.email,
 * requester.company, project.name, project.color, project.portal_url,
 * agent.name, message.body, signature. Unknown placeholders are rejected by
 * the warpath supportdesk service rather than rendered as literal text.
 *
 * Table: support_email_templates (see
 * ~/advice/docs/support-desk-settings-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_email_templates',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true,
    },
    projectId: {
      type: 'integer',
      columnName: 'project_id',
      required: true,
    },
    // acknowledgement | reply | internal_alert
    kind: {
      type: 'string',
      required: true,
    },
    subject: {
      type: 'string',
      required: true,
    },
    // HTML with {{placeholders}}
    bodyHtml: {
      type: 'text',
      columnName: 'body_html',
      required: true,
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true,
    },
    updatedBy: {
      type: 'string',
      columnName: 'updated_by',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_at',
    },
  },
};
