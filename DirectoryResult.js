'use strict';

let model = {
  attributes: {
    nameScore: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },
    addressScore: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },
    phoneScore: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },
    score: {
      type: 'integer',
      int: true,
      defaultsTo: null
    },
    error: {
      type: 'string',
      defaultsTo: null
    },
    queueTime: {
      type: 'datetime',
      defaultsTo: null
    },
    startTime: {
      type: 'datetime',
      defaultsTo: null
    },
    endTime: {
      type: 'datetime',
      defaultsTo: null
    },

    client: {
      model: 'client'
    },
    competitor: {
      model: 'clientCompetitor'
    },
    directory: {
      model: 'directory',
      required: true
    }
  }
};

module.exports = model;
