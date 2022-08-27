const {Schema, model} = require('mongoose');


const userSchema = new Schema({

    userName: {
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
    active: Boolean

},
{
    timestamps: true,
    versionKey: false

})


module.exports = model('Users', userSchema);