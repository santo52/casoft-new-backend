'use strict'

const mongoose = require('mongoose')

const Name = 'Menu';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: String,

  parent: String,

  icon: String,

  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route'
  },

  deleted: {
    type: Boolean,
    default: false
  },

  datemod: {
    type: Date,
    default: new Date()
  }
})

module.exports = {
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}