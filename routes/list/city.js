module.exports = [

    {
        'route': '/cities',
        'controller': 'CityController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/cities',
        'controller': 'CityController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/cities/:id',
        'controller': 'CityController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/cities/:id',
        'controller': 'CityController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/cities/:id',
        'controller': 'CityController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]