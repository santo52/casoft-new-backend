'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const SALT_WORK_FACTOR = 10

const Name = 'User'

const Schema = new mongoose.Schema({

  //Información básica

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
  deleted: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  initialDate: { type: Date }, //fecha de ingreso
  retirementDate: { type: Date }, //fecha de retiro

  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },


  //información de pago
  salary: { type: Number },
  salaryInKind: { type: Number }, // salario en especie
  transportAid: { type: Number }, // auxilio de transporte
  transportAidType: { type: String }, // endinero = money, en especie = kind
  payType: { type: String }, // efectivo = money, en cheque=check, consignación= consignment
  accountType: { type: String }, // tipo de cuenta ahorros=savings, corriente=checking
  accountNumber: { type: Number }, 
  bankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bank'
  },

  isBonusPending: { type: Boolean }, //Prima pendiente de ajuste

  lastBonusPayment: { type: Date }, //Fecha de último pago de prima
  lastCesantiasPayment: { type: Date }, //Fecha de último pago de cesantias
  lastInterestPayment: { type: Date }, //Fecha de último pago de interes sobre cesantias
  lastVacationsPayment: { type: Date }, //Fecha de último pago de vacaciones

  
  

  
})


Schema.pre(['save', 'updateOne'], function (next) {

  const user = this;
  const updatePassword = user._update && user._update.password
  const createPassword = user.isModified && user.isModified('password')
  if (!updatePassword && !createPassword) return next()

  
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password || user._update.password, salt, null, function (err, hash) {
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


Schema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
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
  getName: () => Name,
  schema: () => Schema,
  model: () => mongoose.model(Name, Schema)
}