const Users = require('../../models/user.model');


const removeAuth = async (req, res) => {

    
    const {email} = req.body;

    try {
        if(email){

            const deleteToken = await Users.findOneAndUpdate(email, {token: ''}, {new: true});
            
            if(deleteToken) return res.status(200).json({message: 'Se ha cerrado sessión!!'});
            else res.status(400).json({message: 'Error interno'})
    
            
        }
    } catch (error) {
        console.log(`Error removeAuth --> ${error}`);
        return res.status(500).json({message:'Error al cerrar sessión!!'});
    }
}



module.exports = removeAuth;