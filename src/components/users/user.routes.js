const {Router} = require('express');

// veriryToken función que valida en token enviado y da acceso a la ruta o lo niega
const verifyToken = require('../../middlewares/verifyToken');
const createUsers = require('./createUsers.controller');
const getUser = require('./getUser.controller');
const updateUsers = require('./updateUsers.controller');
const deleteUsers = require('./deleteUsers.controller');
const userActivation = require('./userActivation.controller');

const router = Router();


/**
 * @swagger
 * tags:
 *  name: Users
 * 
 */




/**
 * @swagger
 * /users:
 *  post:
 *      summary: crea un nuevo usuario en el sistema 
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          name: 
 *                              type: string
 *                          email: 
 *                              type: string
 *                          password:
 *                              type: string
 *                      required:
 *                          - name
 *                          - email
 *                          - password
 *      responses:
 *          200:
 *              description: message Usuario creado
 *          500:
 *              description: message Error al crear el usuario
 */


router.post('/', createUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: devuelve un usuario de acuerdo al Id proporcionado 
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true  
 *            description: Id del usuario a consultar        
 *      responses:
 *          201:
 *              description: message Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id: 
 *                                  type: string  
 *                              name: 
 *                                  type: string
 *                              email: 
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              token:
 *                                  type: string
 *                              active:
 *                                  type: boolean
 *          400:
 *              description: message No se encontro el usuario
 *          500:
 *              description: message Error al crear el usuario
 *          
 *          
 */
router.get('/:id',verifyToken, getUser);//Se valida el token con verifyToken





/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: actulaiza un usuario en el sistema de acuerdo al Id proporcionado 
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true  
 *            description: Id del usuario a consultar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          name: 
 *                              type: string
 *                          email: 
 *                              type: string
 *                          password:
 *                              type: string
 *                      required:
 *                          - name
 *                          - email
 *                          - password
 *      responses:
 *          200:
 *              description: message Ususario actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id: 
 *                                  type: string  
 *                              name: 
 *                                  type: string
 *                              email: 
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              token:
 *                                  type: string
 *                              active:
 *                                  type: boolean
 *          404:
 *              description: message Usuario no encotrado
 *          400:
 *              description: message Error debe enviar todos los datos
 *          500:
 *              description: message Error no se pudo actualizar el usuario
 */

router.put('/:id',verifyToken, updateUsers);


/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: borra un usuario del sistema de acuerdo al Id proporcionado 
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true  
 *            description: Id del usuario a consultar        
 *      responses:
 *          201:
 *              description: message Usuario borrado del sistema
 *          400:
 *              description: message Ususario no encontrado
 *          500:
 *              description: message Error no se pudo borrar el usuario del sistema
 *          
 *          
 */

router.delete('/:id',verifyToken, deleteUsers);




/**
 * @swagger
 * /users/{id}/active:
 *  patch:
 *      summary: devuelve un usuario activado de acuerdo al Id proporcionado 
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true  
 *            description: Id del usuario a consultar        
 *      responses:
 *          201:
 *              description: message Usuario activado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id: 
 *                                  type: string  
 *                              name: 
 *                                  type: string
 *                              email: 
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              token:
 *                                  type: string
 *                              active:
 *                                  type: boolean
 *          400:
 *              description: message Usuario no encontrado
 *          500:
 *              description: message Error no se pudo activar el usuario
 *          
 *          
 */

router.patch('/:id/active',verifyToken, userActivation);








module.exports = router;