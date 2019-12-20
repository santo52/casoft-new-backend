'use strict'

const mongoose = require('mongoose')

const Name = 'AbsenceType';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  percentPaid: { type: Number, default: 100 }, // porcentaje pagado
  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}