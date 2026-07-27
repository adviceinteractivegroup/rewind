module.exports = {
  tableName: 'tickets',
  connection: 'mysql',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    ticketId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'ticket_id',
    },
    clientId: {
      type: 'integer',
      columnName: 'client_id',
    },
    partnerId: {
      type: 'integer',
      columnName: 'partner_id',
    },
    orderId: {
      type: 'integer',
      columnName: 'order_id',
      defaultsTo: 0,
    },
    productId: {
      type: 'integer',
      columnName: 'product_id',
      defaultsTo: 0,
    },
    user: {
      type: 'string',
      defaultsTo: '',
    },
    userId: {
      type: 'integer',
      columnName: 'user_id',
      defaultsTo: 0,
    },
    subject: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    type: {
      type: 'string',
      defaultsTo: 'general',
    },
    status: {
      type: 'string',
      defaultsTo: 'new',
    },
    category: {
      type: 'string',
    },
    freshdesk: {
      type: 'string',
      defaultsTo: 'false',
    },
    freshdeskDisplayId: {
      type: 'integer',
      columnName: 'freshdesk_display_id',
    },
    dateCreated: {
      type: 'string',
      columnName: 'date_created',
    },
    dateUpdated: {
      type: 'string',
      columnName: 'date_updated',
    },
  },
};
