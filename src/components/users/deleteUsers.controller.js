const Users = require('../../models/user.model');


const deleteUsers = async (req, res) => {

    const idUser = req.params.id;

    try {

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