'use strict'

const mongoose = require('mongoose')

const Name = 'RoleRoute'

const Schema = new mongoose.Schema({
  
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },

  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route'
  },

  permissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Permission'
  }]

})

module.exports = {
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}