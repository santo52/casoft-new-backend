'use strict'

const mongoose = require('mongoose')

const Name = 'PayrollConcept'

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, //pago y descuento
  ponder: { type: Number, default: 1 }, //ponderador
  formule: { type: String }, //formula personalizada

  //Datos generales

  periodicityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Periodicity',
    required: true
  },
  conceptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConceptType',
    required: true
  },

  //Base de calculos

  parafiscalId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parafiscal',
    required: true
  }],

  withoutLending: { type: Boolean, default: false }, //sin carga prestacional para contrato integral

  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}