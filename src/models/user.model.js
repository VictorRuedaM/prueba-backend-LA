const {Schema, model} = require('mongoose');


const userSchema = new Schema({

    name: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        unique: true
    },
    active: Boolean

},
{
    timestamps: true,
    versionKey: false

})


module.exports = model('Users', userSchema);