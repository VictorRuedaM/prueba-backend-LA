const path = require('path');

const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prueba Desarrollador Backend',
            version: '1.0.0',
            description: 'Documentación de la aplicación usando Swagger'

        },
        servers:[{
            url: 'http://localhost:3001'
        }] 
    },
    apis: [`${path.join(__dirname, './components/users/user.routes.js')}`, 
    `${path.join(__dirname, './components/authorization/authorization.routes.js')}`,
    `${path.join(__dirname, './components/messages/message.routes.js')}`]
}


module.exports = options;