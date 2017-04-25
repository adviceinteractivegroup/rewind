'use strict';

module.exports = {
  attributes: {
    question: {
      type: 'string',
      required: true,
    },
    answer: {
      type: 'string',
      required: true,
    },
    keywords: {
      type: 'string',
      required: true,
    },
    unhelpful: {
      type: 'integer',
      defaultsTo: 0,
    },
    helpful: {
      type: 'integer',
      defaultsTo: 0,
    },
    internal: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};
