
const Controller = require('./Controller')
const model = require('../model/contract')

class ContractController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = ContractController;