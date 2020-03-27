const Controller = require('./Controller')
const model = require('../model/role')

class RoleController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = RoleController;