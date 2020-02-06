
const Controller = require('./Controller')
const model = require('../model/variableLog')

class VariableLogController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = VariableLogController;