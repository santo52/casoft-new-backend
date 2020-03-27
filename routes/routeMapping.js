const express = require('express')
const { checkRolePermission } = require('../utils/functions')
const api = express.Router()
const routes = require('./routes')

routes.map(params => {

  const { controller, verb = 'GET', method, route } = params
  const Controller = require(`../controller/${controller}`)
  const controllerObj = new Controller()
  api[verb.toLowerCase()](route, (req, res, next) => checkRolePermission(req, res, params, next), controllerObj[method])

})

module.exports = api