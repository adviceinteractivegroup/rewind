'use strict';

module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true,
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
