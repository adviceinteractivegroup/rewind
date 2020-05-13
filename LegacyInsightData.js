'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoTK: false,
  autoUpdatedAt: false,
	tableName: 'insight_data',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
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
    recordedAt: {
      type: 'datetime',
      columnName: 'date_record',
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'date_updated',
    },

    la_score: {type: 'integer'},
    brand_score: {type: 'integer'},
    influence_score: {type: 'integer'},
    reputation_score: {type: 'integer'},
    engagement_score: {type: 'integer'},
    website_visits: {type: 'integer'},
    phone_calls_clicks: {type: 'integer'},
    phone_calls_tracked: {type: 'integer'},
    directions: {type: 'integer'},
    posts_clicks: {type: 'integer'},
    calls_directions: {type: 'integer'},
    conv_rate: {type: 'float'},
    total_conversions: {type: 'integer'},
    avg_sale_price: {type: 'integer'},
    potential_revenue: {type: 'integer'},
    investment: {type: 'integer'},
    potential_roi: {type: 'integer'},
    review_rating: {type: 'float'},
    photo_views: {type: 'integer'},
    discovery_impressions: {type: 'integer'},
    direct_impressions: {type: 'integer'},
    listing_views: {type: 'integer'},
    total_calls: {type: 'integer'},
    first_time_caller: {type: 'integer'},
    duration: {type: 'string'},
    daily_cost: {type: 'integer'},
    active_locations: {type: 'integer'},
    cost_per_location: {type: 'float'},
    total_impressions: {type: 'integer'},
    cpm: {type: 'float'},
    total_actions: {type: 'integer'},
    cost_per_action: {type: 'float'},
    total_contacts: {type: 'integer'},
    cost_per_contact: {type: 'integer'},
  },
};

