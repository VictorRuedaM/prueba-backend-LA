const userRoute = require('../components/users/user.routes');

const routes = (app) => {

    app.use('/users', userRoute);

}








module.exports = routes;