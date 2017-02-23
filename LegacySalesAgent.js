'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'sales_agents',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'sales_agent_id'
    },
    email: {
      type: 'string',
      required: true
    },
    referralCode: {
      type: 'string',
      required: true,
      columnName: 'referral_code'
    }
  }
};  

