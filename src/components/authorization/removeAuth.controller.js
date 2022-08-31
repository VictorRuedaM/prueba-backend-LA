const Users = require('../../models/user.model');

// Controlador removeAuth que recibe el email por body del usuario al que se le eliminara el token de la DB
// imita el cierre de sessión, si es exitoso devuelve un res con status y un mensaje de exito de lo contrario
// devuelve un res con status y mensaje de error
const removeAuth = async (req, res) => {

    
    const {email} = req.body;
    
    try {
        // Se valida si fue enviado un email
        if(email){
            // Se verifica que el email exite en la DB
            const verify = await Users.findOne({email})
            
            // Si exite en emial se ejecuta este código para borrar el token de la DB 
            if(verify){
               
                // Se borra el token del campo correspondiente al usuario buscando lo con su email
                const deleteToken = await Users.findByIdAndUpdate(verify.id, {token: ''}, {new: true});
                
                if(deleteToken) return res.status(200).json({message: 'Se ha cerrado sessión!!'});
                else res.status(400).json({message: 'Error interno'});
                
            }else res.status(400).json({message: 'Error interno'})
    
            
        }
    } catch (error) {
        console.log(`Error removeAuth --> ${error}`);
        return res.status(500).json({message:'Error al cerrar sessión!!'});
    }
}



module.exports = removeAuth;