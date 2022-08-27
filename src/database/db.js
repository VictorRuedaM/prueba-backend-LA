const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/usersDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('-->> Data Base is connected'))
    .catch(error => console.log(`Error connecting the Data Base --> ${error}`))



