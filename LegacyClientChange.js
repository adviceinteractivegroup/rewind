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
      autoIncrement: true,
    },
    client: {
      model: 'legacyclient',
      columnName: 'client_id',
      required: true,
    },
    fields: {
      type: 'string',
      required: true,
    },
    diff: {
      type: 'json',
      required: true,
    },
    createdAt: {
      type: 'datetime',
      columnName: 'thedate',
      required: true,
      defaultsTo: function() {
 return Date();
},
    },
  },
};

