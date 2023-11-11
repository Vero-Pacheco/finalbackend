const {Schema, model } = require ('mongoose')

const UsersSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    apellido: {
        type: String,
        required: [true, "el apellido es obligatorio"]
    },
    mail: {
        type: String,
        required: [true, "el mail es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "la contraseña es obligatorio"]
    },
    google: {
        type: Boolean,
        default: false
    }
})

const Users = model('User', UsersSchema)
module.exports = {Users}