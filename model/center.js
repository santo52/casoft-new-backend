'use strict'

const mongoose = require('mongoose')

const Name = 'Center'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
})


module.exports = {
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}