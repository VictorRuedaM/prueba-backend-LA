const Users = require('../../models/user.model');
const {encryptPass} = require('../../middlewares/encryptPass');
const { emit } = require('../../models/user.model');

// Controlador createUsers recibe por body el name, email y password para crear el ussario en la DB
// retorna un res con un status y un mensaje indicando el resultado de la operación
const createUsers = async (req, res) => {

    const {name, email, password} = req.body;

    // Se evalua si se enviaron los datos requeridos para proceder
    // de no venir los datos requiridos no se efectua el codigo del try y se envia un error informando del no envio de la información
    if(name && email && password){

        
        try {
            // Se verifica que el usuario no exista ya en el sistema
            const verifyUser = await Users.findOne({email: email})
            
            if(verifyUser) return res.status(400).json({message: 'El usuario ya existe en el sistema'});

            // Se encripta la contraseña
            let passEncrypt = await encryptPass(password);
            // Se crea el objecto usuario
            const user = new Users({
                name,
                email, 
                password: passEncrypt,
                token: '',  //El campo token se setea por defecto con string bacio, no viene en el body
                active: false //El campo active se setea por defecto en false, no viene en el body
            })
            // Se guarda en nuevo usuario en la DB
            const result = await user.save();
           
            if(result) return res.status(201).json({message: 'Usuario creado!!'});
            else return res.status(400).json({message:'Error al crear el usuario!!'});


        
        } catch (error) {
            console.log(`Error createUsers --> ${error}`);
            return res.status(500).json({message:'Error al crear el usuario!!'});
              
        }
    }else{
        res.status(500).send('Error debe enviar todos los datos')
    }
    

    

}



module.exports = createUsers;