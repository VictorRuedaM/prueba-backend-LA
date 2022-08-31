const {Schema, model} = require('mongoose');

// userSchema para crear usuarios en la collection de la base de datos 
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
        type: String, // La propiedad token por defecto esta bacia '' y se le asigna un valor cuan el usuario se logea 
        
    },
    active: Boolean // active se setea por defecto en false cuando se crea un usuario nuevo

},
{
    timestamps: true,
    versionKey: false

})

// Se exporta el modelo Users del userSchema
module.exports = model('Users', userSchema);