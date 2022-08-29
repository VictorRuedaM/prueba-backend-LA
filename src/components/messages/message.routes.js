const {Router} = require('express');
const sendMessage = require('./mqtt.controller');

const router = Router();

router.post('/', sendMessage)











module.exports = router;