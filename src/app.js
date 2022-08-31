const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.routes');

// importa la libreria swagger para la doucmentecion de las rutas y el archivo options de configuración de la libreria
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const options = require('./swaggerOptions');


const app = express();

//Settings
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));

//Middlewares
app.use(express.json())
app.use(morgan('dev'));





//Routes
routes(app);














module.exports = app;