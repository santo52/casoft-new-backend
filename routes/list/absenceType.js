module.exports = [

    {
        'route': '/absence-types',
        'controller': 'AbsenceTypeController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/absence-types',
        'controller': 'AbsenceTypeController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/absence-types/:id',
        'controller': 'AbsenceTypeController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/absence-types/:id',
        'controller': 'AbsenceTypeController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/absence-types/:id',
        'controller': 'AbsenceTypeController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]