const Users = require('../../models/user.model');

const createUsers = async (req, res) => {

    const {name, email, password} = req.body;

    if(name && email && password){

        try {

            const user = new Users({
                name,
                email, 
                password,
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