'use strict';

module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true,
    },
    files: {
      type: 'json',
      required: true,
    },
  },
};
