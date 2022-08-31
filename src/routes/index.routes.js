const userRoute = require('../components/users/user.routes');
const authorizationRoute  = require('../components/authorization/authorization.routes');
const messageRoute = require('../components/messages/message.routes');


// Función manejador de rutas que resibe el app
const routes = (app) => {

    app.use('/users', userRoute); // Ruta usuarios, CRUD + ATIVE
    app.use('/authorization', authorizationRoute);   //Ruta authorization que imita un login de usuario y devuelve un token
    app.use('/message', messageRoute) //Ruta que dispara en mensaje por MQTT
    
}








module.exports = routes;