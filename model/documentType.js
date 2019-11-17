'use strict'

const mongoose = require('mongoose')

const Name = 'GrantClient';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  deleted: { type: Boolean, default: false }
})

module.exports = {
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}