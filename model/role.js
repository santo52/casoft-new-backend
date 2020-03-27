'use strict'

const mongoose = require('mongoose')

const Name = 'Role'

const Schema = new mongoose.Schema({
  
  name: { 
    type: String, 
    required: true, 
    index: { unique: true } 
  },

  alias: { 
    type: String, 
    required: true, 
    index: { unique: true } 
  },

  deleted: { 
    type: Boolean, 
    default: false 
  }

})

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}