
const Controller = require('./Controller')
const model = require('../model/documentType')

class DocumentTypeController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = DocumentTypeController;