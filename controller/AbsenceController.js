
const Controller = require('./Controller')
const Model = require('../model/absence')
const User = require('../model/user').model()
const { toJSON, toObjectID } = require('../utils/functions')

class AbsenceController extends Controller{

    constructor(){
        super(Model)
    }


  async getAll(req, res) {

    const absences = await this.Model.find()
    if (!absences) {
      res.status(200).send({ data: [] })
    }


    Promise.all(absences.map(async absence => {

      const { userId, start, finish } = absence

      let fullName = 'Desconocido'
      const user = await User.findById(userId)
      if (user) {
        fullName = user.firstname + ' ' + user.lastname
      }

      const [startDate, startHour] = start.split(' ')
      return { ...absence._doc, fullName, startDate, startHour }

    })).then(data => {
      res.status(200).send({ data })
    })
  }
}

module.exports = AbsenceController;