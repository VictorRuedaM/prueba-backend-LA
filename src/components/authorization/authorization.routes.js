const {Router} = require('express');
const getAuthorization = require('./getAuthorization.controller');
const removeAuth = require('./removeAuth.controller');
const verifyToken = require('../../middlewares/verifyToken');



const router = Router();

router.post('/', getAuthorization);

router.put('/', verifyToken, removeAuth);



module.exports = router;