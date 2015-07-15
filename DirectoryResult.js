'use strict';

let model = {
  attributes: {
    nameScore: {
      type: 'int',
      int: true,
      defaultsTo: null
    },
    addressScore: {
      type: 'int',
      int: true,
      defaultsTo: null
    },
    phoneScore: {
      type: 'int',
      int: true,
      defaultsTo: null
    },
    score: {
      type: 'int',
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
