const express = require('express');
const routes = require('./routes/index.routes');
const app = express();



//Routes
routes(app);













module.exports = app;