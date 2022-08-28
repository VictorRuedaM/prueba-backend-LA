const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');
require('dotenv').config();

const {KEY_WORD} = process.env;

const verifyToken = async (req, res, next) => {

    try {
        const bearerHeader = req.headers['authorization'];

        if(!bearerHeader) return res.status(400).json({messagre: 'Token no enviado'});

        const resultToken = jwt.verify(bearerHeader, KEY_WORD);
       
        const authUser = await Users.findById(resultToken.userId)
        
        if(authUser) next()
        else return res.status(400).json({message: 'Autorización denegada'});

    } catch (error) {
        console.log(`Error verifyToken --> ${error}`);
        return res.status(400).json({message: 'Autorización denegada'});
    }

}




module.exports = verifyToken;