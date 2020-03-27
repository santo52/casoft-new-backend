module.exports = [

    {
        'route': '/contracts',
        'controller': 'ContractController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/contracts',
        'controller': 'ContractController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/contracts/:id',
        'controller': 'ContractController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/contracts/:id',
        'controller': 'ContractController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/contracts/:id',
        'controller': 'ContractController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]