const {Schema, model} = require('mongoose');


const userSchema = new Schema({

    name: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        
    },
    active: Boolean

},
{
    timestamps: true,
    versionKey: false

})


module.exports = model('Users', userSchema);