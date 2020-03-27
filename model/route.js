'use strict'

const mongoose = require('mongoose')

const Name = 'Route';

const Schema = new mongoose.Schema({

  alias: {
    type: String,
    required: true
  },

  route: {
    type: String,
    required: true,
    index: { unique: true }
  },

  deleted: {
    type: Boolean,
    default: false
  }
})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}