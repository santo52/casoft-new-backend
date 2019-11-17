'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const Name = 'User'

const Schema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  birthDay: { type: Date },
  jobTitle: { type: String },
  eps: { type: String },
  afp: { type: String },
  afc: { type: String },
  box: { type: String }, // caja de compensación
  telephone: { type: String },
  document: { type: String },
  documentExpeditionDate: { type: Date },
  address: { type: String },
  neighborhood: { type: String },
  stratum: { type: Number },
  bloodType: { type: String },
  gender: { type: String },
  civilStatus: { type: String },
  militaryCard:  { type: String },
  avatar: { type: String },
  firstDay: { type: Date },
  salary: { basic: { type: Number }, transport: { type: Number } },
  session_expires: { type: Date },
  deleted: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  companies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }]
})


Schema.pre(['save', 'updateOne'], function (next) {

  const user = this;
  const updatePassword = user._update && user._update.password
  const createPassword = user.isModified && user.isModified('password')

  if (!updatePassword && !createPassword) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password || user._update.password, salt, function (err, hash) {
      if (err) return next(err)

      if(updatePassword){
        user._update.password = hash
      } else {
        user.password = hash
      }
    
      next()
    })
  })
})


Schema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

Schema.methods.getUserLogin = async (username, password) => {
  const user = await mongoose.model(Name).findOne({
    $and: [
      { $or: [{ username }, { email: username }] },
      { deleted: false }
    ]
  })

  if(user){
    const isCorrectPassword = await user.comparePassword(password)
    return isCorrectPassword ? user : null
  }

}



module.exports = {
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}