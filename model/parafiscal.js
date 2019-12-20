'use strict'

const mongoose = require('mongoose')

const Name = 'Parafiscal'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  isDiscount: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false }
})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}