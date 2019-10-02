'use strict';

module.exports = {
  connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'submission_url_data',
  autoTK: false,
  attributes: {
    id: {
      type: 'integer',
    },
    url: {
      type: 'string',
    },
  },
};

