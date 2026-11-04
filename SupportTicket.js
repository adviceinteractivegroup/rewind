'use strict';

/**
 * SupportTicket
 *
 * Header row for a support desk ticket. The conversation lives in
 * SupportTicketMessage (support_ticket_messages); the outbound notification
 * ledger lives in SupportTicketEmail (support_ticket_emails).
 *
 * Table: support_tickets (see ~/advice/docs/support-desk-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_tickets',
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
    categoryId: {
      type: 'integer',
      columnName: 'category_id',
    },
    subject: {
      type: 'string',
      required: true,
    },
    requesterName: {
      type: 'string',
      columnName: 'requester_name',
      required: true,
    },
    requesterEmail: {
      type: 'string',
      columnName: 'requester_email',
      required: true,
    },
    requesterCompany: {
      type: 'string',
      columnName: 'requester_company',
    },
    // open | pending | resolved | closed
    status: {
      type: 'string',
      defaultsTo: 'open',
    },
    // low | normal | high | urgent
    priority: {
      type: 'string',
      defaultsTo: 'normal',
    },
    assignee: {
      type: 'string',
    },
    // wall | email | import
    source: {
      type: 'string',
      defaultsTo: 'wall',
    },
    lastMessageAt: {
      type: 'datetime',
      columnName: 'last_message_at',
    },
    lastMessageDirection: {
      type: 'string',
      columnName: 'last_message_direction',
    },
    closedAt: {
      type: 'datetime',
      columnName: 'closed_at',
    },
    createdBy: {
      type: 'string',
      columnName: 'created_by',
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
