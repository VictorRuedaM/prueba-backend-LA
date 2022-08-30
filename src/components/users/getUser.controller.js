const Users = require('../../models/user.model');


const getUser = async (req, res) => {


    const idUser = req.params.id;
    
    

    try {
        const data = await Users.findById(idUser)
        console.log(data)
        if(data) return res.status(201).json({message: 'Usuario encontrado!!', data});
        return res.status(400).json({message:'No se encontro el usuario!!'});
    } catch (error) {
        console.log(`Error getUser --> ${error}`);
        return res.status(500).json({message:'Error interno'});
    }




    
    
};





module.exports = getUser;