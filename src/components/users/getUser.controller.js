const Users = require('../../models/user.model');

// Controlador getUser recibe un ID de un usuario, busca el usuario con ese Id en la DB y si lo encuentra
// devuelve un un res con un status, un mensaje y la información del usuario, sino es encoutrado o hay un 
// error devuelve un res con un status y un mensaje
const getUser = async (req, res) => {


    const idUser = req.params.id;
    
    

    try {
        //Se busca el usuario en la DB por el Id
        const data = await Users.findById(idUser)
        
        if(data) return res.status(201).json({message: 'Usuario encontrado!!', data});
        return res.status(400).json({message:'No se encontro el usuario!!'});
    } catch (error) {
        console.log(`Error getUser --> ${error}`);
        return res.status(500).json({message:'Error interno'});
    }




    
    
};





module.exports = getUser;