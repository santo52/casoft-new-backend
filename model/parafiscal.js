'use strict'

const mongoose = require('mongoose')

const Name = 'Parafiscal'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  isDiscount: { type: Boolean, default: false },
  employeePercentage: { type: Number, required: true },
  companyPercentage: { type: Number, required: true },
  from: { type: String, required: true }, // Porcentajes calculados a partir del salario minimo, ingreso base cotización o salario
  chronology: { type: String, required: true },
  withSalaryRange: { type: Boolean, default: false },
  salaryRange: { //rango de salarios mínimos al que aplica
    from: String,
    to: String
  },
  deleted: { type: Boolean, default: false }
})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}