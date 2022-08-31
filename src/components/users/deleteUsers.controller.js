const Users = require('../../models/user.model');

// Controlador deleteUser borra un usuario dela DB, recibe un ID del usuario a borrar y si la operación es
// exitosa envia un res con un status y un mesaje de exito, si hay un error envia un status con un mensaje de error
const deleteUsers = async (req, res) => {

    const idUser = req.params.id;

    try {
        // Busca y borra al usuario del Id dado en al DB
        const result = await Users.findByIdAndDelete(idUser);
        
        result ?  res.status(201).json({message: 'Usuario borrado del sistema!!'})
        :
         res.status(400).json({message: 'Ususario no encontrado!!'})
        
        
    } catch (error) {
        console.log(`Error updateUser --> ${error}`);   
        return res.status(500).json({message:'Error no se pudo borrar el usuario del sistema!!'});
    }

    
};



module.exports = deleteUsers;