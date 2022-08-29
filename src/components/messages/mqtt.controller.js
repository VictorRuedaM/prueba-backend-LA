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
            // console.log('first', client)
            const u = client.on('connect', () => {
    
                client.publish('presence', JSON.stringify(dato))
    
            })
        
            eventMessage()
    
            return res.status(200).json({message: 'Mensaje enviado!!'})
        }
    } catch (error) {
        console.log(`Error sendMessage --> ${error}`);
        return res.status(500).json({message: 'Error interno'})
    }
   }
   

}

const eventMessage = () => {

    const client  = mqtt.connect(' mqtt://test.mosquitto.org' )

    client.on('connect', () => {

        client.subscribe('presence')
        
    })

    client.on('message', (topic, message) => {

        console.log(message.toString())
        client.end()
    })
    
    
    
        
}





module.exports = sendMessage;