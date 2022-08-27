const app = require('./src/app');
require('dotenv').config()

const PORT = process.env.PORT || 3001;







const main = () => {

    app.listen(PORT, () => {

        console.log(`--->> Server is running on PORT ${PORT} `);
    })
}

main();