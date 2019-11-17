
const Controller = require('./Controller')
const model = require('../model/city')

class CityController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = CityController;