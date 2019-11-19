
const Controller = require('./Controller')
const model = require('../model/absenceType')

class AbsenceTypeController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = AbsenceTypeController;