'use strict'

const mongoose = require('mongoose')

const Name = 'GrantClient';

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },

  clientId: {
    type: String,
    required: true
  },

  clientSecret: {
    type: String,
    required: true
  },

  grants: [String],

  redirectUris: [String],

  accessTokenLifetime: {
    type: Number,
    default: 14400
  },

  refreshTokenLifetime: {
    type: Number,
    default: 604800
  }
})


Schema.methods.findByClient = (clientId, clientSecret) => {
  return mongoose.model(Name).findOne({
    $and: [{ clientSecret }, { clientId }]
  })
}


module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}