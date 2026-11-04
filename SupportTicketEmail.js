'use strict';

/**
 * SupportTicketEmail
 *
 * Ledger of the notifications the support desk renders. The prototype runs
 * with SUPPORT_EMAIL_LIVE unset, so rows are written with status 'logged'
 * (recipient, subject and the full rendered body are still recorded — the Wall
 * shows them so the flow can be inspected without mailing fake requesters).
 * Set SUPPORT_EMAIL_LIVE=true to actually hand them to SES (status 'sent' or
 * 'error').
 *
 * Table: support_ticket_emails (see ~/advice/docs/support-desk-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_ticket_emails',
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
    ticketId: {
      type: 'integer',
      columnName: 'ticket_id',
      required: true,
    },
    messageId: {
      type: 'integer',
      columnName: 'message_id',
    },
    direction: {
      type: 'string',
      defaultsTo: 'outbound',
    },
    toEmail: {
      type: 'string',
      columnName: 'to_email',
      required: true,
    },
    fromEmail: {
      type: 'string',
      columnName: 'from_email',
      required: true,
    },
    subject: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'text',
    },
    // logged | sent | error
    status: {
      type: 'string',
      defaultsTo: 'logged',
    },
    provider: {
      type: 'string',
      defaultsTo: 'ses',
    },
    error: {
      type: 'string',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
  },
};
