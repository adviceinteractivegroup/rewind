/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    project: {
      model: 'project',
      required: true,
    },
    user: {
      model: 'user',
    },
    data: {
      type: 'json',
    },
    directory: {
      model: 'directory',
      required: true,
    },
    completedAt: {
      type: 'datetime',
    },
    pausedAt: {
      type: 'datetime',
    },
    duration: {
      type: 'integer',
    },
    status: {
      type: 'string',
      enum: ['not_started', 'paused', 'in_progress', 'overdue', 'completed'],
      defaultsTo: 'not_started',
    },
  },
};

