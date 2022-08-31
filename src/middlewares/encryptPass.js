const bcrypt = require('bcryptjs');

// Función que encripta la contraseña enviada por el usuario utilizando la libreria bcrypt
const encryptPass = async (password) => {

    try {
        // Se crea un salt
        const salt = await bcrypt.genSalt(10);
        // Se crea el hash con la contraseña y el salt
        const passEncrypt = await bcrypt.hash(password, salt);
        return passEncrypt;

    } catch (error) {
        console.log(`Error encryptPass --> ${error}`);
    }


}


// Función comparePass que compara la contraseña que el usuario tiene en la DB con la que ingresa para el login
const comparePass = async (dbPassword, userPassword) => {
    
    try {
        // Se compara la contraseña dela DB (dbPassword) con al del usuario(userPassword)
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