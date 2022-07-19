'use strict';
/*
 * total: 2,
 rating: null,
 maxRating: null,
 reviews:
 */

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'review_summary',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'REVIEW_SUMMARY_ID',
    },
    client: {
      model: 'legacyclient',
      required: true,
      columnName: 'client_id',
    },
    partner: {
      model: 'legacypartner',
      required: true,
      columnName: 'partner_id',
    },
    createdAt: {
      type: 'datetime',
      columnName: 'date_created',
      defaultsTo: function() {
       return new Date();
      },
    },
     updatedAt: {
      type: 'datetime',
      columnName: 'date_updated',
      defaultsTo: function() {
       return new Date();
      },
    },
    directory: {
      type: 'string',
      required: true,
    },
    reviews: {
      type: 'integer',
      required: true,
      columnName: 'total_reviews',
    },
    rating: {
      type: 'integer',
      columnName: 'rating',
    },
    maxRating: {
      type: 'integer',
      columnName: 'max_rating',
    },
  },
};

