const Users = require('../../models/user.model');
const {encryptPass} = require('../../middlewares/encryptPass');

const updateUsers = async (req, res) => {

    const userId = req.params.id;
    const {name, email, password} = req.body;

    if(name && email && password){

        try {
            
            let passEncrypt = await encryptPass(password);

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