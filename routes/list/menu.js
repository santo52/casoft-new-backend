module.exports = [

    {
        'route': '/menus',
        'controller': 'MenuController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/menus',
        'controller': 'MenuController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/menus/:id',
        'controller': 'MenuController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/menus/:id',
        'controller': 'MenuController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/menus/:id',
        'controller': 'MenuController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]