module.exports = [

    {
        'route': '/income-departure',
        'controller': 'IncomeDepartureController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/income-departure',
        'controller': 'IncomeDepartureController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/income-departure/upload',
        'controller': 'IncomeDepartureController',
        'method': 'upload',
        'verb': 'POST',
        'roles': ['admin']
    }
]