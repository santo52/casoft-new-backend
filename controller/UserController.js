
const Controller = require('./Controller')
const model = require('../model/user')

class UserController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = UserController;