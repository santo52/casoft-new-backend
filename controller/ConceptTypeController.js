
const Controller = require('./Controller')
const model = require('../model/conceptType')

class ConceptTypeController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = ConceptTypeController;