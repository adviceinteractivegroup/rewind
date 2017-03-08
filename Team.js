/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    location: {
      type: 'string',
      required: true,
    },
    hours: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    leader: {
      model: 'user',
    },
    threshold: {
      type: 'integer',
      required: true,
      defaultsTo: 1000,
    },
    tasksClosed: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
    tasksOpened: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
    projects: {
      type: 'integer',
      required: true,
      defaultsTo: 0,
    },
    active: {
      type: 'boolean',
      required: true,
      defaultsTo: true,
    },
    users: {
      collection: 'user',
      via: 'team',
    },
  },
};
