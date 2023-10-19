const { User } = require('../models');

const userData = [
    {
        username: 'JonnyBones',
        email: 'jonjones@email.com',
        password: 'thechamp205',
    },
    {
        username: 'Borz',
        email: 'khamzatc@email.com',
        password: 'smesheveryone',
    },
    {
        username: 'Frankthetank',
        email: 'frank@email.com',
        password: 'billymadison',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;