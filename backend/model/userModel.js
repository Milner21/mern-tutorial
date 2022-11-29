const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
     name: {
        type: String,
        required: [true, "favor ingrese un nombre"]
     },
     email: {
        type: String,
        required: [true, "favor ingrese un correo"]
     },
     password: {
        type: String,
        required: [true, "favor ingrese un contrasena"]
     },
     
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
