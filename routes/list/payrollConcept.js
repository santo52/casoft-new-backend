module.exports = [

    {
        'route': '/payroll-concepts',
        'controller': 'PayrollConceptController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']
    },
    {
        'route': '/payroll-concepts',
        'controller': 'PayrollConceptController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/payroll-concepts/:id',
        'controller': 'PayrollConceptController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/payroll-concepts/:id',
        'controller': 'PayrollConceptController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/payroll-concepts/:id',
        'controller': 'PayrollConceptController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]