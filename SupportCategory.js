'use strict';

/**
 * SupportCategory
 *
 * A ticket topic (billing, account, listings, reviews, …) used by the support
 * desks. `projectId` scopes it:
 *
 *   projectId = null      shared category, offered on every desk (the original
 *                         behaviour, and what keeps cross-project reporting
 *                         comparable)
 *   projectId = <id>      owned by one desk only
 *
 * Slug is unique per scope, enforced by the functional unique index
 * uq_support_categories_scope_slug on (IFNULL(project_id, 0), slug) — not by
 * the model, because two desks may each own a "billing".
 *
 * Table: support_categories (see ~/advice/docs/support-desk-ddl.sql and
 * ~/advice/docs/support-desk-settings-ddl.sql)
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
    projectId: {
      type: 'integer',
      columnName: 'project_id',
    },
    name: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
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
