'use strict'

const mongoose = require('mongoose')

const Name = 'Absence';

const Schema = new mongoose.Schema({
  start: { type: String, required: true },
  finish: { type: String, required: true },
  absenceTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AbsenceType'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  deleted: { type: Boolean, default: false }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}