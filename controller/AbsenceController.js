
const Controller = require('./Controller')
const model = require('../model/absence')

class AbsenceController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = AbsenceController;