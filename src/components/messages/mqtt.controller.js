const { default: axios } = require('axios');
const Users = require('../../models/user.model');
const mqtt = require('mqtt')

// Controlado sendMessage que envia un mensaje por MQTT con el ID del usuario que recibe por body
// y un mensaje que viene de [https://catfact.ninja/docs] datos curiosos, ademas permite leer el mensaje 
// que se envio para confimar que fue publicado en el servidor
const sendMessage = async (req, res) => {
   
   const {id} = req.body;
    // Se verifica que viene el ID
   if(id){

    try {
        // Se confirma que el Id existe en la DB
        const verifyId = await Users.findById(id)
        if(verifyId){
            // Mediante axios se traen los datos curisos de la url 
            const datos = await axios.get('https://catfact.ninja/docs');
            
            // Se crea un objecto con el mensaje los datos curiosos y el Id del usuario
            const dato = {
                mensaje: datos.data,
                id
            }
            // Se establece la conexión con el sevidor MQTT
            const client  = mqtt.connect('mqtt://test.mosquitto.org' )
            //  const client = mqtt.connect('mqtt://mqtt.lyaelectronic.com:1883')
            
            // Se suscribe al canal para escuchar o leer los mensajes enviados al servidor
            client.on('connect', () => {

                client.subscribe('lyatest/[código_prueba]')//canal al cual se suscribe
                
            })
            // Se suscribe al canal al cual enviara los mensajes para publicarlos
            client.on('connect', () => {
                // Publica el mensaje el cual es convertido en JSON con el metodo JSON.stringify() para ser envido
                client.publish('lyatest/[código_prueba]', JSON.stringify(dato))
                console.log('>>>>>>>>>>')
            })

            
            // Se conecta para recibir los mensajes enviaodos al canal al cual previamente se suscribio arriba
            client.on('message', (topic, message) => {
                // Convierte los mensajes recibidos a string y los imprime
                console.log('elmensaje', message.toString())
                // Cierra la conexión al servicio
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