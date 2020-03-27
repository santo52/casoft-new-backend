
const Controller = require('./Controller')
const model = require('../model/country')

class CountryController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = CountryController;