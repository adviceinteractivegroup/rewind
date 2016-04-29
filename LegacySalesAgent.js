'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'sales_agents',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'sales_agent_id'
    },
    email: {
      type: 'string',
      columnName: 'username'
    }
  }
};  

