module.exports = [

    {
        'route': '/variable-logs',
        'controller': 'VariableLogController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/variable-logs',
        'controller': 'VariableLogController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/variable-logs/:id',
        'controller': 'VariableLogController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/variable-logs/:id',
        'controller': 'VariableLogController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/variable-logs/:id',
        'controller': 'VariableLogController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]