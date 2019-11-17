module.exports = [

    {
        'route': '/roles',
        'controller': 'RoleController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/roles',
        'controller': 'RoleController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/roles/:id',
        'controller': 'RoleController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/roles/:id',
        'controller': 'RoleController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/roles/:id',
        'controller': 'RoleController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
    {
        'route': '/roles/:id',
        'controller': 'RoleController',
        'method': 'restore',
        'verb': 'PUT',
        'roles': ['admin']
    }
]