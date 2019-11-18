
const Controller = require('./Controller')
const model = require('../model/payrollConcept')

class PayrollConceptController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = PayrollConceptController;