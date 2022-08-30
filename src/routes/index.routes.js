const userRoute = require('../components/users/user.routes');
const authorizationRoute  = require('../components/authorization/authorization.routes');
const messageRoute = require('../components/messages/message.routes');


const routes = (app) => {

    app.use('/users', userRoute);
    app.use('/authorization', authorizationRoute);
    app.use('/message', messageRoute)
    
}








module.exports = routes;