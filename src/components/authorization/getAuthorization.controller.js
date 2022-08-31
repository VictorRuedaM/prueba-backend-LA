const Users = require('../../models/user.model');
const {comparePass} = require('../../middlewares/encryptPass');
const createToken = require('../../middlewares/jwtGenerator');


// Controlador getAuthorization que imita un login de usuario, recibe el email y el password del usuario por body
// si el usuario esta registrado devuelve un res con un mensaje de acceso y el token generado para dicho usuario
// al tiempo que guarda el token en el campo token de ese usuario en la DB, si hay un error envia un 
// res con un status y un mensaje de error
const getAuthorization = async (req, res) => {


    const {email, password} = req.body;
    // Se verifica si los campos fueron enviados
    if(email && password){

        try {

      
            // Se verifica si el correo del usuario esta en la DB y se retornan los datos para validar la password
            const verifyUser = await Users.findOne({email});
            // Se guarda la password del usuario que tiene registrada en la DB para ser validada con la que ingreso
            const dbPassword = verifyUser.password;

            // Si el usuario existe en DB se ejecuta este código, sino se niega el acceso
            if(verifyUser){

                // Se compara las password que envio el usuario con la que esta en la DB con la función comparePass que recibe las contraseñas
                const verifyPass = await comparePass(dbPassword , password)

                // Si la password es correcta se ejecuta este código
                if(verifyPass){

                    // Si el campo token del usuario esta bacio se ejecuta este código para generar un nuevo
                    // token para el usuario, si ya tiene un token en la DB no se ejecuta
                    if(!verifyUser.token){

                        // Se crea un objecto que contiene el Id y el email del usuario para genera el token 
                        // con la función createToken que recibe el objecto
                        const data = {
                            id: verifyUser._id,
                            email: verifyUser.email
                        }
                        // Se genera el token
                        const token = await createToken(data);
                        // Se actualiza la DB para guardar el nuevo token del usuario buscandolo con su ID
                        const tokenDB = await Users.findByIdAndUpdate(verifyUser._id, {token}, {new: true})
                        console.log('El token auth', tokenDB)
                        // Se retorna exito si se genero token
                        if(token){
                            return res.status(200).json({message: 'Acceso concedido!!', token})
    
                        }else{
                            return res.status(500).json({message: 'Error interno'})
                        }
                    }

                    // Si el usuaro ya tiene un token se le da acceso sin generar uno nuevo
                    return res.status(200).json({message: 'Acceso concedido!!'})
                    
                    
                }else{
                    return res.status(400).json({message: 'Autorización denegada'})
                }
            }

            


        } catch (error) {
            console.log(`Error getAuthorization --> ${error}`);
            return res.status(500).json({message:'Error al autorizar login!!'});
        }
    }
    else{
        res.status(500).send('Error debe enviar todos los datos')
    }

    
}


module.exports = getAuthorization;