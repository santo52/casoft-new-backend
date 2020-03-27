module.exports = [

    {
        'route': '/periodicity',
        'controller': 'PeriodicityController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/periodicity',
        'controller': 'PeriodicityController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/periodicity/:id',
        'controller': 'PeriodicityController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/periodicity/:id',
        'controller': 'PeriodicityController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/periodicity/:id',
        'controller': 'PeriodicityController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]