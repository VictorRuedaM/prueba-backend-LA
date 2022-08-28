
const jwt = require('jsonwebtoken');
require('dotenv').config();


const {KEY_WORD} = process.env;


const createToken = (data) => {
   
    try {
        const token = jwt.sign({userEmail: data.email, userId: data.id}, KEY_WORD, {
            expiresIn: 3600
        })
        
        return token;

    } catch (error) {
        console.log(`Error createToken --> ${error}`);
    }
} 


module.exports = createToken;
