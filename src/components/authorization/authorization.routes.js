const {Router} = require('express');
const getAuthorization = require('./getAuthorization.controller');
const removeAuth = require('./removeAuth.controller');
// veriryToken función que valida en token enviado y da acceso a la ruta o lo niega
const verifyToken = require('../../middlewares/verifyToken');



const router = Router();

/**
 * @swagger
 * tags:
 *  name: Authorization
 * 
 */

/**
 * @swagger
 * /authorization:
 *  post:
 *      summary: permite iniciar sessión a un usuario registrado en el sistema y le devuelve un token de autenticación si es la primer vez que se logea
 *      tags: [Authorization]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          email: 
 *                              type: string
 *                          password:
 *                              type: string
 *                      required:
 *                          - email
 *                          - password
 *      responses:
 *          200:
 *              description: message Acceso concedido
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token: 
 *                                  type: string 
 *                                  description: si el usuario ya estaba logeado no crea un nuevo token 
 *          400:
 *              description: message Autorización denegada
 *          500:
 *              description: message Error al autorizar login
 */

router.post('/', getAuthorization);


/**
 * @swagger
 * /authorization:
 *  put:
 *      summary: elmina el token creado para el usuario seleccionado de la base de datos, recibe el emial del usuario y en el header el token
 *      tags: [Authorization]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          email: 
 *                              type: string
 *                         
 *                      required:
 *                          - email
 *                         
 *      responses:
 *          200:
 *              description: message Se ha cerrado sessión
 *          400:
 *              description: message Error interno
 *          500:
 *              description: message Error al cerrar sessión
 */
router.put('/',verifyToken, removeAuth);



module.exports = router;