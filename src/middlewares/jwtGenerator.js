
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Variable de entorno que contiene la palabra clave con la que se genera el token que viene del archivo .env
const {KEY_WORD} = process.env;

// Función createToken que recibe el email y el ID del usuario para generar el token
const createToken = (data) => {
   
    try {
        // Mediante el metodo sign de la libreria jsonwebtoken se crea el token
        // pasando por parametro un objecto con los datos del usuario, la palabra clave y 
        // seteando el tiempo de expiración del token
        const token = jwt.sign({userEmail: data.email, userId: data.id}, KEY_WORD, {
            expiresIn: 3600
        })
        
        return token;

    } catch (error) {
        console.log(`Error createToken --> ${error}`);
    }
} 


module.exports = createToken;
