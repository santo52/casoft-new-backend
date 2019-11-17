'use strict'

const mongoose = require('mongoose')

const Name = 'Permission';

const Schema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  alias: {
    type: String,
    required: true
  },

  deleted: {
    type: Boolean,
    default: false
  },
})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}