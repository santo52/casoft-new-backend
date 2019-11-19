
const Controller = require('./Controller')
const Model = require('../model/incomeDeparture')
const User = require('../model/user').model()
const { toJSON, toObjectID } = require('../utils/functions')

class IncomeDepartureController extends Controller {

  constructor() {
    super(Model)
  }

  async getAll(req, res) {

    const incomesDepartures = await this.Model.find()
    if (!incomesDepartures) {
      res.status(200).send({ data: [] })
    }


    Promise.all(incomesDepartures.map(async incomeDeparture => {

      const { userId, start, finish } = incomeDeparture

      let fullName = 'Desconocido'
      const user = await User.findById(userId)
      if (user) {
        fullName = user.firstname + ' ' + user.lastname
      }

      const [startDate, startHour] = start.split(' ')
      const [finishDate, finishHour] = finish.split(' ')
      return { ...incomeDeparture._doc, fullName, startDate, startHour, finishDate, finishHour }

    })).then(data => {
      res.status(200).send({ data })
    })
  }

  async upload(req, res) {

    if (!req.body.data) {
      return res.status(200).send({ data: [] })
    }

    console.log(req.body.data)

    const data = toJSON(req.body.data)

    if (!Array.isArray(data)) {
      return res.status(200).send({ data: [] })
    }

    Promise.all(data.map(async item => {
      const user = await User.findOne({ document: item.identification })
      const dataUser = user._doc || user
      return await Model.model().create({ ...item, userId: dataUser._id })
    })).then(data => {
      return res.status(200).send({ data })
    })

  }

}

module.exports = IncomeDepartureController;