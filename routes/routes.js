const UserRoutes = require('./list/user')
const RoleRoutes = require('./list/role')

module.exports = [
  ...UserRoutes,
  ...RoleRoutes
]