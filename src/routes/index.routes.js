const userRoute = require('../components/users/user.routes');
const authorizationRoute  = require('../components/authorization/authorization.routes');

const routes = (app) => {

    app.use('/users', userRoute);
    app.use('/authorization', authorizationRoute);

}








module.exports = routes;