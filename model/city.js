'use strict'

const mongoose = require('mongoose')


const Name = 'City'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  departamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departament'
  },
  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}