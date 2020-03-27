
const Controller = require('./Controller')
const model = require('../model/department')

class DepartamentController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = DepartamentController;