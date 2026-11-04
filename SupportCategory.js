'use strict';

/**
 * SupportCategory
 *
 * The shared ticket topic list (billing, account, listings, reviews, …). It is
 * deliberately global rather than per project: the same funnel is used on every
 * support desk, which is what lets the operator compare categories across
 * projects.
 *
 * Table: support_categories (see ~/advice/docs/support-desk-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_categories',
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
    status: {
      type: 'string',
      defaultsTo: 'active',
    },
    sortOrder: {
      type: 'integer',
      columnName: 'sort_order',
      defaultsTo: 0,
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
