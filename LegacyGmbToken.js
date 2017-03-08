'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'gmb_tokens',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    token: {
      type: 'string',
      required: true,
      unique: true,
    },
    clients: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
    createdAt: {
      date: 'datetime',
      columnName: 'thedate',
      defaultsTo: function() {
 return Date();
},
    },
  },
};

