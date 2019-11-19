
const Controller = require('./Controller')
const model = require('../model/extraHour')

class ExtraHourController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = ExtraHourController;