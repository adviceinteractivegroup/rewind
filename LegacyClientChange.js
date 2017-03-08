'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'aclients_changelog',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'client_changelog_id',
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
    },
    fields: {
      type: 'json',
      required: true,
    },
    diff: {
      type: 'json',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      required: true,
    },
  },
};

