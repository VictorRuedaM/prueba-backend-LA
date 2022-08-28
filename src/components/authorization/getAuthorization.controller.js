const Users = require('../../models/user.model');
const {comparePass} = require('../../middlewares/encryptPass');
const createToken = require('../../middlewares/jwtGenerator');


const getAuthorization = async (req, res) => {


    const {email, password} = req.body;

    if(email && password){

        try {

      

            const verifyUser = await Users.findOne({email});
            console.log('veriryAut', verifyUser)
            const dbPassword = verifyUser.password;
            if(verifyUser){

                const verifyPass = await comparePass(dbPassword , password)
                
                if(verifyPass){

                    // const existTocken = 
                    if(!verifyUser.token){
                        const data = {
                            id: verifyUser._id,
                            email: verifyUser.email
                        }
                        
                        const token = await createToken(data);

                        const tokenDB = await Users.findByIdAndUpdate(verifyUser._id, {token}, {new: true})
                        console.log('El token auth', tokenDB)
                        
                        if(token){
                            return res.status(200).json({message: 'Acceso concedido!!', token})
    
                        }else{
                            return res.status(500).json({message: 'Error interno'})
                        }
                    }


                    return res.status(200).json({message: 'Acceso concedido!!'})
                    
                    
                }else{
                    return res.status(400).json({message: 'Autorización denegada'})
                }
            }

            


        } catch (error) {
            console.log(`Error getAuthorization --> ${error}`);
            return res.status(500).json({message:'Error al autorizar login!!'});
        }
    }
    else{
        res.status(500).send('Error debe enviar todos los datos')
    }

    
}


module.exports = getAuthorization;