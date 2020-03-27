'use strict'

const mongoose = require('mongoose')

const Name = 'Variable'

const Schema = new mongoose.Schema({
  alias: { type: String, required: true }, // alias de la variable
  name: { type: String, required: true }, // Nombre de la variable
  value: { type: String, required: true }, // Valor de la variable
  fixed: { type: Boolean, default: false }, // Si la variable no puede ser eliminada
  deleted: { type: Boolean, default: false },
  datemod: { type: Date, default: new Date() }, // fecha de modificación
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}