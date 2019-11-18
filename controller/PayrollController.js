
const Controller = require('./Controller')
const model = require('../model/payroll')

class PayrollController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = PayrollController;