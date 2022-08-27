const {Router} = require('express');
const getAuthorization = require('./getAuthorization.controller');



const router = Router();

router.post('/', getAuthorization)



module.exports = router;