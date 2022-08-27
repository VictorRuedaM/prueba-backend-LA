const Users = require('../../models/user.model');

const updateUsers = async (req, res) => {

    const userId = req.params.id;
    const {name, email, password} = req.body;

    if(name && email && password){

        try {
            
            const data = await Users.findByIdAndUpdate(userId, {name, email, password}, {new: true})
            
            if(data) return res.status(201).json({message: 'Ususario actualizado!!', data});
            else return res.status(400).json({message: 'Usuario no encotrado'})

        } catch (error) {
            console.log(`Error updateUser --> ${error}`);   
            return res.status(500).json({message:'Error no se pudo actualizar el usuario!!'});
        }
    }else{
        res.status(500).send('Error debe enviar todos los datos')
    }

    
};





module.exports = updateUsers;