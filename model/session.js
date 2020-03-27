'use strict'

const mongoose = require('mongoose')

const Name = 'Session';

const Schema = new mongoose.Schema({

  accessToken: { 
    type: String, 
    required: true 
  },

  accessTokenExpiresAt: { 
    type: Date, 
    required: true 
  },

  refreshToken: { 
    type: String, 
    required: true 
  },

  refreshTokenExpiresAt: { 
    type: Date, 
    required: true 
  },

  scope: { 
    type: String, 
    default: 'default' 
  },

  deleted: { 
    type: Boolean, 
    default: false 
  }
})


Schema.methods.findByAccessToken = (accessToken) => {
  return mongoose.model(Name).findOne({ $and: [{ accessToken }, { deleted: false }] })
},

Schema.methods.findByRefreshToken = (refreshToken) => {
  return mongoose.model(Name).findOne({ $and: [{ refreshToken }, { deleted: false }] })
},

Schema.methods.deleteByRefreshToken = (refreshToken) => {
  return mongoose.model(Name).updateOne({ refreshToken }, { deleted: true })
},

Schema.methods.create = (data) => {
  return mongoose.model(Name).create(data)
}

module.exports = {
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}