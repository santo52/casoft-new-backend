module.exports = [

    {
        'route': '/absences',
        'controller': 'AbsenceController',
        'method': 'getAll',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/absences',
        'controller': 'AbsenceController',
        'method': 'create',
        'verb': 'POST',
        'roles': ['admin']
    },
    {
        'route': '/absences/:id',
        'controller': 'AbsenceController',
        'method': 'get',
        'verb': 'GET',
        'roles': ['admin']

    },
    {
        'route': '/absences/:id',
        'controller': 'AbsenceController',
        'method': 'update',
        'verb': 'PUT',
        'roles': ['admin']
    },
    {
        'route': '/absences/:id',
        'controller': 'AbsenceController',
        'method': 'delete',
        'verb': 'DELETE',
        'roles': ['admin']
    },
]