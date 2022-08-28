const Users = require('../../models/user.model');
const {encryptPass} = require('../../middlewares/encryptPass');
const { emit } = require('../../models/user.model');

const createUsers = async (req, res) => {

    const {name, email, password} = req.body;

    if(name && email && password){

        
        try {

            const verifyUser = await Users.findOne({email: email})
            
            if(verifyUser) return res.status(400).json({message: 'El usuario ya existe en el sistema'});

            let passEncrypt = await encryptPass(password);

            const user = new Users({
                name,
                email, 
                password: passEncrypt,
                token: '',
                active: false
            })

            const result = await user.save();
           
            if(result) return res.status(201).json({message: 'Usuario creado!!'});
            


        
        } catch (error) {
            console.log(`Error createUsers --> ${error}`);
            return res.status(500).json({message:'Error al crear el usuario!!'});
              
        }
    }else{
        res.status(500).send('Error debe enviar todos los datos')
    }
    

    

}



module.exports = createUsers;