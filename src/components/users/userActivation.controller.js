const Users = require('../../models/user.model');


// Controlador userActivation que cambia el valor de en la DB del campo active de false por defecto 
// y lo setea en true, si la operación es exitosa devuelve un res con un status y un mensaje de exito y la información 
// del usuario, de lo contrario retorna un res status con un mensaje de error

const userActivation = async (req, res) => {

    const userId = req.params.id;
    


    try {
        // Busca el usuario por el Id y actualiza a true el campo active
        const data = await Users.findByIdAndUpdate(userId, {active: true}, {new: true})
       
        if(data) return res.status(201).json({message: 'Usuario activado!!', data});
        else return res.status(400).json({message: 'Usuario no encontrado'})

    } catch (error) {
        console.log(`Error updateUser --> ${error}`);   
        return res.status(500).json({message:'Error no se pudo activar el usuario!!'});
    }
    

    
};




module.exports = userActivation;