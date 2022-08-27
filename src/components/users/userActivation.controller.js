const Users = require('../../models/user.model');

const userActivation = async (req, res) => {

    const userId = req.params.id;
    
    console.log('activo', userId)
    

    try {
        
        const data = await Users.findByIdAndUpdate(userId, {active: true}, {new: true})
       
        if(data) return res.status(201).json({message: 'Usuario activado!!', data});
        else return res.status(400).json({message: 'Usuario no encontrado'})

    } catch (error) {
        console.log(`Error updateUser --> ${error}`);   
        return res.status(500).json({message:'Error no se pudo activar el usuario!!'});
    }
    

    
};




module.exports = userActivation;