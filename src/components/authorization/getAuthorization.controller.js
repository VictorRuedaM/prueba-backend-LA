const Users = require('../../models/user.model');


const getAuthorization = async (req, res) => {

    res.status(201).json({message: 'in authorization'})
}


module.exports = getAuthorization;