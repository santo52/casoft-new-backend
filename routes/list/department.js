module.exports = [

    {
        'route': '/departments',
        'controller': 'DepartmentController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/departments',
        'controller': 'DepartmentController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/departments/:id',
        'controller': 'DepartmentController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/departments/:id',
        'controller': 'DepartmentController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/departments/:id',
        'controller': 'DepartmentController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]