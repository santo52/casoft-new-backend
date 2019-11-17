module.exports = [

    {
        'route': '/companies',
        'controller': 'CompanyController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/companies',
        'controller': 'CompanyController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/companies/:id',
        'controller': 'CompanyController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/companies/:id',
        'controller': 'CompanyController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/companies/:id',
        'controller': 'CompanyController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]