/**
 * Configuration.
 */
const User = require('./controllers/userController')


var config = {
  clients: [{
    id: 'application',	// TODO: Needed by refresh_token grant, because there is a bug at line 103 in https://github.com/oauthjs/node-oauth2-server/blob/v3.0.1/lib/grant-types/refresh-token-grant-type.js (used client.id instead of client.clientId)
    clientId: 'application',
    clientSecret: 'secret',
    grants: [
      'password',
      'refresh_token'
    ],
    redirectUris: []
  }],
  confidentialClients: [{
    clientId: 'confidentialApplication',
    clientSecret: 'topSecret',
    grants: [
      'password',
      'client_credentials'
    ],
    redirectUris: []
  }],
  tokens: []
}

const getClient = function (clientId, clientSecret) {

  const clients = config.clients.filter(function (client) {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });

  const confidentialClients = config.confidentialClients.filter(function (client) {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });

  return clients[0] || confidentialClients[0];
}

const getUser = async function (username, password) {
  return await User.getUserLogin(username, password)
}

const validateScope = (user, client, scope) => {
  console.log('validateScope', user, client, scope)
  return true
}

const generateAccessToken = (client, user, scope) => {
  console.log('generateAccessToken')
}

const generateRefreshToken = (client, user, scope) => {
  console.log('generateRefreshToken')
}










const generateAuthorizationCode = (client, user, scope) => {
  console.log('generateAuthorizationCode')
}


const getAuthorizationCode = (authorizationCode) => {
  console.log('getAuthorizationCode')
}



const saveAuthorizationCode = (code, client, user) => {
  console.log('saveAuthorizationCode')
}




const getAccessToken = function (token) {
  console.log('getAccessToken')
  var tokens = config.tokens.filter(function (savedToken) {

    return savedToken.accessToken === token;
  });

  return tokens[0];
};


const saveToken = function (token, client, user) {
  console.log('saveToken')
  token.client = {
    ...client
  }

  token.user = {
    ...user
  }

  config.tokens.push(token);

  return token;
};


/*
 * Method used only by client_credentials grant type.
 */

const getUserFromClient = function (client) {
  console.log('getUserFromClient')
  const clients = config.confidentialClients.filter(function (savedClient) {

    return savedClient.clientId === client.clientId && savedClient.clientSecret === client.clientSecret;
  });

  return clients.length;
};

/*
 * Methods used only by refresh_token grant type.
 */

const getRefreshToken = function (refreshToken) {
  console.log('getRefreshToken')
  const tokens = config.tokens.filter(function (savedToken) {

    return savedToken.refreshToken === refreshToken;
  });

  if (!tokens.length) {
    return;
  }

  return tokens[0];
};

const revokeToken = function (token) {
  console.log('revokeToken')
  config.tokens = config.tokens.filter(function (savedToken) {

    return savedToken.refreshToken !== token.refreshToken;
  });

  const revokedTokensFound = config.tokens.filter(function (savedToken) {

    return savedToken.refreshToken === token.refreshToken;
  });

  return !revokedTokensFound.length;
};

const revokeAuthorizationCode = (code) => {
  console.log('revokeAuthorizationCode')
}


const verifyScope = (accessToken, scope) => {
  console.log('verifyScope')
}
/**
 * Export model definition object.
 */

module.exports = {
  getAccessToken,
  getClient,
  saveToken,
  getUser,
  getUserFromClient,
  getRefreshToken,
  revokeToken,
  generateAccessToken,
  generateRefreshToken,
  generateAuthorizationCode,
  getAuthorizationCode,
  saveAuthorizationCode,
  revokeAuthorizationCode,
  validateScope,
  verifyScope
};