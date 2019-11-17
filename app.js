
const OAuth2Server = require('oauth2-server')
const express = require('express')
const bodyParser = require('body-parser')
const RoleRoute = require('./model/roleRoute')
const cors = require('cors')
const app = express()

/** Routing */
const routes = require('./routes/routeMapping')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.oauth = new OAuth2Server({
  model: require('./controller/AuthController'),
  allowBearerTokensInQueryString: true
})


app.all('/api/oauth/token', obtainToken)
app.use('/api/', authenticateRequest, routes)

function obtainToken(req, res) {
  const request = new OAuth2Server.Request(req)
  const response = new OAuth2Server.Response(res)

  return app.oauth.token(request, response)
    .then(function (token) {
      res.json(token)
    }).catch(function (err) {
      res.status(err.code || 500).json(err);
    });
}



function authenticateRequest(req, res, next) {

  const request = new OAuth2Server.Request(req)
  const response = new OAuth2Server.Response(res)

  return app.oauth.authenticate(request, response)
    .then(()=> next())
    .catch(err => res.status(err.code || 500).json(err))
}




module.exports = app