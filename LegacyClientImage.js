'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
	tableName: 'projimage',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id'
    },
    client: {
      model: 'legacyclient',
      columnName: 'id'
    },
    imageArray: {
      type: 'string',
      columnName: 'imgarray'
    },
    imageObject: {
      type: 'string',
      columnName: 'additional_images'
    }
  }
};  

