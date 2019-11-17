module.exports = [

    {
        'route': '/centers',
        'controller': 'CenterController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/centers',
        'controller': 'CenterController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/centers/:id',
        'controller': 'CenterController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/centers/:id',
        'controller': 'CenterController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/centers/:id',
        'controller': 'CenterController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]