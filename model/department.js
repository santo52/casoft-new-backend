'use strict'

const mongoose = require('mongoose')

const Name = 'Department'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}