const UserRoutes = require('./list/user')
const RoleRoutes = require('./list/role')
const CenterRoutes = require('./list/center')
const CityRoutes = require('./list/city')
const CompanyRoutes = require('./list/company')
const ContractRoutes = require('./list/contract')
const CountryRoutes = require('./list/country')
const DepartmentRoutes = require('./list/department')
const DocumentTypeRoutes = require('./list/documentType')
const ParafiscalRoutes = require('./list/parafiscal')
const PayrollConceptRoutes = require('./list/payrollConcept')
const PeriodicityRoutes = require('./list/periodicity')
const ConceptTypeRoutes = require('./list/conceptType')
const BankRoutes = require('./list/bank')
const MenuRoutes = require('./list/menu')
const PayrollConfigRoutes = require('./list/payroll')


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
  ...MenuRoutes,
  ...ParafiscalRoutes,
  ...PayrollConceptRoutes,
  ...PeriodicityRoutes,
  ...ConceptTypeRoutes,
  ...BankRoutes,
  ...PayrollConfigRoutes
]