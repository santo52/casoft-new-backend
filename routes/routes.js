const UserRoutes = require('./list/user')
const RoleRoutes = require('./list/role')
const CenterRoutes = require('./list/center')
const CityRoutes = require('./list/city')
const CompanyRoutes = require('./list/company')
const ContractRoutes = require('./list/contract')
const CountryRoutes = require('./list/country')
const DepartmentRoutes = require('./list/department')
const DocumentTypeRoutes = require('./list/documentType')
const MenuRoutes = require('./list/menu')

module.exports = [
  ...UserRoutes,
  ...RoleRoutes,
  ...CenterRoutes,
  ...CityRoutes,
  ...CompanyRoutes,
  ...ContractRoutes,
  ...CountryRoutes,
  ...DepartmentRoutes,
  ...DocumentTypeRoutes,
  ...MenuRoutes
]