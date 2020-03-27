module.exports = [

    {
        'route': '/parafiscals',
        'controller': 'ParafiscalController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/parafiscals',
        'controller': 'ParafiscalController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/parafiscals/:id',
        'controller': 'ParafiscalController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/parafiscals/:id',
        'controller': 'ParafiscalController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/parafiscals/:id',
        'controller': 'ParafiscalController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]