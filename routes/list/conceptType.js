module.exports = [

    {
        'route': '/concept-types',
        'controller': 'ConceptTypeController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/concept-types',
        'controller': 'ConceptTypeController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/concept-types/:id',
        'controller': 'ConceptTypeController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/concept-types/:id',
        'controller': 'ConceptTypeController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/concept-types/:id',
        'controller': 'ConceptTypeController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]