const Users = require('../../models/user.model');


const getUser = async (req, res) => {


    const idUser = req.params.id;

    

    try {
        const data = await Users.findById(idUser)

        if(data) return res.status(201).json({message: 'Usuario encontrado!!', data});

    } catch (error) {
        console.log(`Error getUser --> ${error}`);
        return res.status(500).json({message:'Error no se encontro el usuario!!'});
    }




    
    
};





module.exports = getUser;