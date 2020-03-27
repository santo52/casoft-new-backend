
const Controller = require('./Controller')
const model = require('../model/company')

class CompanyController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = CompanyController;