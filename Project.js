/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    legacyclient: {
      model: 'legacyclient',
      required: true,
    },
    legacyorder: {
      model: 'legacyorder',
      required: true,
    },
    team: {
      model: 'team',
    },
    completedAt: {
      type: 'datetime',
    },
    dueAt: {
      type: 'datetime',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['not_started', 'paused', 'in_progress', 'overdue', 'completed'],
      defaultsTo: 'not_started',
    },
    tasks: {
      collection: 'task',
      via: 'project',
    },
    totalClosed: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
    totalOpened: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
  },
};

