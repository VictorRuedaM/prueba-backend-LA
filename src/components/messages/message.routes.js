const {Router} = require('express');
const sendMessage = require('./mqtt.controller');

// veriryToken función que valida en token enviado y da acceso a la ruta o lo niega
const verifyToken = require('../../middlewares/verifyToken');

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Send Message
 * 
 */

/**
 * @swagger
 * /message:
 *  post:
 *      summary: ejecuta la ruta para enviar un mensaje mediate MQTT
 *      tags: [Send Message]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          id: 
 *                              type: string
 *                      required:
 *                          - id
 *      responses:
 *          200:
 *              description: message Mensaje enviado
 *          400:
 *              description: message No se pudo enviar el mensaje
 *          500: 
 *              description: message Error interno
 */

router.post('/',verifyToken, sendMessage)











module.exports = router;