module.exports = [

    {
        'route': '/users',
        'controller': 'UserController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/users',
        'controller': 'UserController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/users/:id',
        'controller': 'UserController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/users/:id',
        'controller': 'UserController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/users/:id',
        'controller': 'UserController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]