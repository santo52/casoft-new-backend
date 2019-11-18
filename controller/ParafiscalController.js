
const Controller = require('./Controller')
const model = require('../model/parafiscal')

class ParafiscalController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = ParafiscalController;