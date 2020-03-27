module.exports = [

    {
        'route': '/extra-hours',
        'controller': 'ExtraHourController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/extra-hours',
        'controller': 'ExtraHourController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/extra-hours/:id',
        'controller': 'ExtraHourController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/extra-hours/:id',
        'controller': 'ExtraHourController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/extra-hours/:id',
        'controller': 'ExtraHourController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
    {
        'route': '/extra-hours/upload',
        'controller': 'ExtraHourController',
        'method': 'upload',
        'verb': 'POST',
        'roles': ['admin']
    },
]