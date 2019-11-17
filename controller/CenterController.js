"use strict";

const Controller = require('./Controller')
const model = require('../model/center')

class CenterController extends Controller{

    constructor(){
        super(model)
    }
}

module.exports = CenterController;