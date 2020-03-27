'use strict'

const mongoose = require('mongoose')

//configuración de nomina

const Name = 'PayrollConfig'

const Schema = new mongoose.Schema({
  payPeriod: { type: Number, default: 30 }, //periodo de pago por dias
  deleted: { type: Boolean, default: false }
})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}