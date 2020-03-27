'use strict'

const mongoose = require('mongoose')

const Name = 'ConceptType'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}