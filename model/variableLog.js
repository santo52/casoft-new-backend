'use strict'

const mongoose = require('mongoose')

const Name = 'VariableLog'

const Schema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre de la variable
  value: { type: String, required: true }, // Valor anterior
  fixed: { type: Boolean, default: false }, // Si la variable no puede ser eliminada
  isDeleted: { type: Boolean, default: false },
  variableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variable',
    required: true
  },
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}