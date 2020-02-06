module.exports = [

    {
        'route': '/variables',
        'controller': 'VariableController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/variables',
        'controller': 'VariableController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/variables/:id',
        'controller': 'VariableController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/variables/:id',
        'controller': 'VariableController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/variables/:id',
        'controller': 'VariableController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]