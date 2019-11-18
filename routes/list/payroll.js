module.exports = [

    {
        'route': '/payrolls',
        'controller': 'PayrollController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/payrolls',
        'controller': 'PayrollController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/payrolls/:id',
        'controller': 'PayrollController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/payrolls/:id',
        'controller': 'PayrollController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/payrolls/:id',
        'controller': 'PayrollController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]