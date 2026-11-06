'use strict';

/**
 * SupportProject
 *
 * One product that owns a support desk (Advice Local, Bubble Life, Judy's Book,
 * …). The desk itself is the pair of things hanging off a project: tickets and
 * a knowledge base.
 *
 * The project row is also the desk's configuration: the email identity its
 * notifications go out under (fromName / fromEmail / replyTo), who gets told
 * about a new ticket (notifyEmails), whether the requester gets an
 * acknowledgement at all (autoAck) and the copy that fills the notification
 * footer (portalUrl / signature). Per-kind subject + body overrides live in
 * SupportEmailTemplate; categories scoped to the desk live in SupportCategory
 * with a non-null projectId (NULL = shared by every desk).
 *
 * Table: support_projects (see ~/advice/docs/support-desk-ddl.sql and
 * ~/advice/docs/support-desk-settings-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_projects',
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
    name: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
    },
    // hex accent the Wall uses for the project chip/card
    color: {
      type: 'string',
      defaultsTo: '#2DBE9F',
    },
    status: {
      type: 'string',
      defaultsTo: 'active',
    },
    sortOrder: {
      type: 'integer',
      columnName: 'sort_order',
      defaultsTo: 0,
    },
    // --- desk email identity + notification settings -----------------------
    // Display name on notifications; falls back to "<name> Support".
    fromName: {
      type: 'string',
      columnName: 'from_name',
    },
    // SES Source address; falls back to no-reply@advicelocal.com.
    fromEmail: {
      type: 'string',
      columnName: 'from_email',
    },
    // Reply-To header; falls back to from_email.
    replyTo: {
      type: 'string',
      columnName: 'reply_to',
    },
    // Comma separated internal addresses told about a new ticket.
    notifyEmails: {
      type: 'string',
      columnName: 'notify_emails',
    },
    // Send the acknowledgement notification when a ticket opens.
    autoAck: {
      type: 'boolean',
      columnName: 'auto_ack',
      defaultsTo: true,
    },
    // Sign-in URL linked from notifications ({{project.portal_url}}).
    portalUrl: {
      type: 'string',
      columnName: 'portal_url',
    },
    // Plain-text sign-off rendered through {{signature}}.
    signature: {
      type: 'string',
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
