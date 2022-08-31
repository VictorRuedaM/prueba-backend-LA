const app = require('./src/app');
require('dotenv').config()
require('./src/database/db');

// Si hay un puerto setea en el archivo .env se trae o sino se usa el 3001
const PORT = process.env.PORT || 3001;






// función que inicia el servidor 
const main = () => {

    app.listen(PORT, () => {

        console.log(`--->> Server is running on PORT ${PORT} `);
    })
}

main();