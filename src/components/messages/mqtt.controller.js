const { default: axios } = require('axios');
const Users = require('../../models/user.model');
const mqtt = require('mqtt')


const sendMessage = async (req, res) => {
   
   const {id} = req.body;
   
   if(id){

    try {

        const verifyId = await Users.findById(id)
        if(verifyId){
            const datos = await axios.get('https://catfact.ninja/docs');
            
            
            const dato = {
                mensaje: datos.data,
                id
            }
    
            const client  = mqtt.connect('mqtt://test.mosquitto.org' )
            //  mqtt://mqtt.lyaelectronic.com:1883
            console.log('>>>>>>>>>> aqui llego ')

            client.on('connect', () => {

                client.subscribe('lyatest/[código_prueba]')
                
            })
            // console.log('first', client)
            client.on('connect', () => {
    
                client.publish('lyatest/[código_prueba]', JSON.stringify(dato))
                console.log('>>>>>>>>>>')
            })

            

            client.on('message', (topic, message) => {

                console.log('elmensaje', message.toString())
                client.end()
            })
        
        
            
    
            return res.status(200).json({message: 'Mensaje enviado!!'})
        }else{
            return res.status(400).json({message: 'No se pudo enviar el mensaje'})
        }
    } catch (error) {
        console.log(`Error sendMessage --> ${error}`);
        return res.status(500).json({message: 'Error interno'})
    }
   }
   

}







module.exports = sendMessage;