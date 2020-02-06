
const Controller = require('./Controller')
const model = require('../model/variable')

class VariableController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = VariableController;