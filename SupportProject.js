'use strict';

/**
 * SupportProject
 *
 * One product that owns a support desk (Advice Local, Bubble Life, Judy's Book,
 * …). The desk itself is the pair of things hanging off a project: tickets and
 * a knowledge base.
 *
 * Table: support_projects (see ~/advice/docs/support-desk-ddl.sql)
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
