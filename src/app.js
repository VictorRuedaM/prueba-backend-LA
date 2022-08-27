const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.routes');
const app = express();



//Middlewares
app.use(morgan('dev'));
app.use(express.json())

//Routes
routes(app);













module.exports = app;