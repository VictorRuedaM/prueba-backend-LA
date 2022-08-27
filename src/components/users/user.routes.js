const {Router} = require('express');

const createUsers = require('./createUsers.controller');
const getUser = require('./getUser.controller');
const updateUsers = require('./updateUsers.controller');
const deleteUsers = require('./deleteUsers.controller');
const userActivation = require('./userActivation.controller');

const router = Router();

router.post('/', createUsers);

router.get('/:id', getUser);


router.put('/:id', updateUsers);

router.delete('/:id', deleteUsers);

router.patch('/:id/active', userActivation);








module.exports = router;