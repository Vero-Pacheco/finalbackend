const {Schema, model } = require ('mongoose')

const TripSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    ciudades: {
        type: String,
        required: [true, "las ciudades son obligatorio"]
    },
    dias: {
        type: Number,
        required: [true, "los dias son obligatorio"]
    },
    precio: {
        type: String,
        required: [true, "el precio es obligatorio"]
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    }

})

const Trip = model('trip', TripSchema)
module.exports = {Trip}