'use strict';

/**
 * SupportTicketMessage
 *
 * One turn in a support ticket conversation.
 *   direction 'inbound'  — written by the requester (or pasted in from email)
 *   direction 'outbound' — a public staff reply; emailed to the requester
 *   direction 'note'     — internal note, never emailed (is_internal = 1)
 *
 * Table: support_ticket_messages (see ~/advice/docs/support-desk-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_ticket_messages',
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
    direction: {
      type: 'string',
      defaultsTo: 'inbound',
    },
    authorName: {
      type: 'string',
      columnName: 'author_name',
      required: true,
    },
    authorEmail: {
      type: 'string',
      columnName: 'author_email',
    },
    body: {
      type: 'text',
      required: true,
    },
    isInternal: {
      type: 'boolean',
      columnName: 'is_internal',
      defaultsTo: false,
    },
    emailed: {
      type: 'boolean',
      defaultsTo: false,
    },
    createdBy: {
      type: 'string',
      columnName: 'created_by',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at',
    },
  },
};
