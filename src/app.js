const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.routes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const options = require('./swaggerOptions');


const app = express();

//Settings


//Middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));




//Routes
routes(app);














module.exports = app;