const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');
require('dotenv').config();

// Variable de entorno que contiene la palabra clave con la que se genera el token que viene del archivo .env
const {KEY_WORD} = process.env;

// Función verifyToken que verifica el token que envia un usuario al hacer una petición al backend 
// si el token es valido se dara acceso a la ruta buscada de lo contrario se denegara el acceso
const verifyToken = async (req, res, next) => {

    try {
        // Se verifica que venga un header con el authorization y el token
        const bearerHeader = req.headers['authorization'];
        // Si no viene el token se rechaza la petición 
        if(!bearerHeader) return res.status(400).json({messagre: 'Token no enviado'});
        // Se verifica el token pasando tambien la palabra clave y retornando la información del usuario 
        // que viaja en el token (email, Id)
        const resultToken = jwt.verify(bearerHeader, KEY_WORD);
        // Se verifica si el Id del token esta en la DB 
        const authUser = await Users.findById(resultToken.userId)
        // Si el Id esta en la DB se da acceso de lo contrario de niega el acceso
        if(authUser) next()
        else return res.status(400).json({message: 'Autorización denegada'});

    } catch (error) {
        console.log(`Error verifyToken --> ${error}`);
        return res.status(400).json({message: 'Autorización denegada'});
    }

}




module.exports = verifyToken;