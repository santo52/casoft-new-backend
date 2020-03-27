'use strict'

const mongoose = require('mongoose')

const Name = 'Menu';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: String,

  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  },

  icon: String,

  route: String,

  order: {type: Number, default: 0},

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
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}