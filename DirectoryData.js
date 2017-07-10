'use strict';

module.exports = {
  attributes: {
    batch: {
      model: 'batch',
    },
    client: {
      model: 'legacyclient',
      required: true,
      index: true,
    },
    data: {
      type: 'json',
    },
    results: {
      type: 'boolean',
    },
    directory: {
      model: 'directory',
      index: true,
    },
    errors: {
      type: 'boolean',
      defaultsTo: false,
    },
    elapsedTime: {
      type: 'integer',
    },
    score: {
      type: 'float',
    },
  },
};
