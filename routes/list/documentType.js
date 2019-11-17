module.exports = [

    {
        'route': '/document-types',
        'controller': 'DocumentTypeController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/document-types',
        'controller': 'DocumentTypeController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/document-types/:id',
        'controller': 'DocumentTypeController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/document-types/:id',
        'controller': 'DocumentTypeController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/document-types/:id',
        'controller': 'DocumentTypeController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]