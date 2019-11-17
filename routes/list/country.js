module.exports = [

    {
        'route': '/countries',
        'controller': 'CountryController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/countries',
        'controller': 'CountryController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/countries/:id',
        'controller': 'CountryController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/countries/:id',
        'controller': 'CountryController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/countries/:id',
        'controller': 'CountryController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]