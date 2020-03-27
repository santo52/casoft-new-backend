module.exports = [

    {
        'route': '/banks',
        'controller': 'BankController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/banks',
        'controller': 'BankController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/banks/:id',
        'controller': 'BankController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/banks/:id',
        'controller': 'BankController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/banks/:id',
        'controller': 'BankController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]