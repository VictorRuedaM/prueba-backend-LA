const bcrypt = require('bcryptjs');


const encryptPass = async (password) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const passEncrypt = await bcrypt.hash(password, salt);
        return passEncrypt;

    } catch (error) {
        console.log(`Error encryptPass --> ${error}`);
    }


}



const comparePass = async (dbPassword, userPassword) => {
    console.log('TTTTTTT', dbPassword, userPassword)
    try {
        const result = await bcrypt.compare(userPassword, dbPassword);

        return result;

    } catch (error) {
         console.log(`Error comparePass --> ${error}`);
    }
}




module.exports = {
    encryptPass,
    comparePass
}