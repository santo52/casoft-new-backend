
const Tokenizer = require('../utils/tokenizer')
const User = require('../model/user').model()
const GrantClient = require('../model/grantClient').model()
const SessionModel = require('../model/session').model()

const Session = new SessionModel()

const getClient = async (clientId, clientSecret) => {
  const client = await new GrantClient().findByClient(clientId, clientSecret)
  return client ? client._doc : false
}

const getUser = async function (username, password) {
  const user = await new User().getUserLogin(username, password)
  return user ? user._doc : false
}

const generateAccessToken = (client, user) => {
  return Tokenizer.create({
    type: 'access_token',
    createdAt: new Date(),
    user: { ...user },
    client: { ...client }
  })
}

const generateRefreshToken = (client, user) => {

  return Tokenizer.create({
    type: 'refresh_token',
    createdAt: new Date(),
    user: { ...user },
    client: { ...client }
  })
}

const getAccessToken = async function (token) {
  const sessionData = await Session.findByAccessToken(token)
  if (!sessionData) {
    return false
  }

  const userClient = Tokenizer.decode(sessionData.accessToken)
  return { ...sessionData._doc, ...userClient }
}


const saveToken = function (token, client, user) {
  Session.create(token)

  delete user.password

  token.client = {
    id: client.id
  }

  token.user = {
    ...user
  }

  return token;
}

const getRefreshToken = async function (refreshToken) {
  const sessionData = await Session.findByRefreshToken(refreshToken)
  if (!sessionData) {
    return false
  }

  const userClient = Tokenizer.decode(sessionData.refreshToken)
  return { ...sessionData._doc, ...userClient }
}

const revokeToken = async function ({ refreshToken }) {
  const { nModified } = await Session.deleteByRefreshToken(refreshToken)
  return nModified
}



module.exports = {
  getAccessToken,
  getClient,
  saveToken,
  getUser,
  getRefreshToken,
  revokeToken,
  generateAccessToken,
  generateRefreshToken
};