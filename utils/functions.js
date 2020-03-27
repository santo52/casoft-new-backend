const ObjectId = (require('mongoose').Types.ObjectId)
const Tokenizer = require('./tokenizer')
const Role = require('../model/role').model()
const InsufficientScopeError = require('oauth2-server/lib/errors/insufficient-scope-error');

module.exports = {

  toJSON(data) {

    if (typeof data === 'string') {
      return JSON.parse(data)
    }

    return data
  },

  toObjectID(id) {
    const hex = /[0-9A-Fa-f]{6}/g;
    return (hex.test(id)) ? ObjectId(id) : id;
  },

  async checkRolePermission(req, res, { roles }, next) {
    const token = req.headers.authorization.split(' ')[1]
    const { user = {} } = Tokenizer.decode(token)

    if (!user.isAdmin) {

      const roleData = await Role.findById(user.roleId)

      if (!roles || !roleData || !roles.includes(roleData.alias)) {
        const err = new InsufficientScopeError()
        return res.status(err.code || 500).send(err)
      }

    }

    next()
  }
}





