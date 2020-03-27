'use strict'

const mongoose = require('mongoose')

const Name = 'IncomeDeparture';

const Schema = new mongoose.Schema({
  start: { type: String, required: true },
  finish: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}