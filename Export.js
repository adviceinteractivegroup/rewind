'use strict';

module.exports = {
  attributes: {
    user: {
      model: 'user'
    },
    filters: {
      type: 'json',
      required: true,
    },
    files: {
      type: 'json',
      required: true,
    },
  },
};
