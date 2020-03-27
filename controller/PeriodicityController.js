
const Controller = require('./Controller')
const model = require('../model/periodicity')

class PeriodicityController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = PeriodicityController;