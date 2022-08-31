const Users = require('../../models/user.model');
const {encryptPass} = require('../../middlewares/encryptPass');

// Controlador updateUsers que actualiza la informacion de un usuario en la DB
// recibe por params el ID del usuario a actualizar y por body los datos que se actualizaran
// retorna un res con un status y un mensaje más la información del usuario actualizado si 
// es exitosa la actualizaión o un res y status más mesaje de error sino lo es.
const updateUsers = async (req, res) => {

    const userId = req.params.id;//Id usuario a actualizar
    const {name, email, password} = req.body;
    // Se verifica en se hayan enviado los datos 
    if(name && email && password){

        try {
            // Se encripta la nueva contraseña
            let passEncrypt = await encryptPass(password);
            // Se busca al usuario por el Id y se actualizan los campos dados
            const data = await Users.findByIdAndUpdate(userId, {name, email, password: passEncrypt}, {new: true})
            
            if(data) return res.status(201).json({message: 'Ususario actualizado!!', data});
            else return res.status(404).json({message: 'Usuario no encotrado'})

        } catch (error) {
            console.log(`Error updateUser --> ${error}`);   
            return res.status(500).json({message:'Error no se pudo actualizar el usuario!!'});
        }
    }else{
        res.status(400).send('Error debe enviar todos los datos')
    }

    
};





module.exports = updateUsers;