'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RoleSchema = Schema({
  name: { type: String, required: true, index: { unique: true } },
  deleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Role', RoleSchema);