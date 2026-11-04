'use strict';

/**
 * SupportKnowledgeBase
 *
 * A per-project FAQ article: a topic plus the body we keep growing as the same
 * questions come in on tickets.
 *
 * Table: support_knowledge_base (see ~/advice/docs/support-desk-ddl.sql)
 */
module.exports = {
  connection: 'mysql',
  tableName: 'support_knowledge_base',
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
    topic: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
    },
    summary: {
      type: 'string',
    },
    body: {
      type: 'text',
      required: true,
    },
    // comma separated
    tags: {
      type: 'string',
    },
    // draft | published
    status: {
      type: 'string',
      defaultsTo: 'published',
    },
    views: {
      type: 'integer',
      defaultsTo: 0,
    },
    sortOrder: {
      type: 'integer',
      columnName: 'sort_order',
      defaultsTo: 0,
    },
    createdBy: {
      type: 'string',
      columnName: 'created_by',
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
