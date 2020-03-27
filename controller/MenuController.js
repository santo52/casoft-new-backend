
const Controller = require('./Controller')
const model = require('../model/menu')

class MenuController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = MenuController;