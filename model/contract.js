'use strict'

const mongoose = require('mongoose')

const Name = 'Contract'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  base: { type: Number, default: 30 }, //base liquidación por días
  day_discount: { type: Number, default: 7 }, //descuente si no trabajó la semana completa 1 es lunes 7 es domingo
  cesantias: { type: Number, default: 0 }, //tope minimo dias para pago de cesantias
  primas: { type: Number, default: 0 }, //tope minimo dias para pago de cesantias
  vacations: { type: Number, default: 0 }, //tope minimo dias para pago de cesantias
  deleted: { type: Boolean, default: false }
})



module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}