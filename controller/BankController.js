
const Controller = require('./Controller')
const model = require('../model/bank')

class BankController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = BankController;