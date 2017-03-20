'use strict';

module.exports = {
  attributes: {
    user: {
      model: 'user',
    },
    report: {
      type: 'string',
      required: true,
    },
    filters: {
      type: 'json',
      required: true,
    },
    files: {
      type: 'json',
    },
  },
};
