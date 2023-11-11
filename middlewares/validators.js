
const {validationResult} = require ('express-validator');
const { Users } = require('../models/usersmodel');
const { Trip } = require('../models/tripmodel');


const validarCampos = (req,res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(499).json({errores: errors.array()})
    }

    next();

};

const emailExiste = async (mail) =>{
    const usuario = await Users.findOne({mail});

    if(usuario){
        throw new Error ("El correo electronico ya esta registrado")
    }

};


const validPassword = async (password) =>{

    if(password.length < 7){
        throw new Error ("La contraseña debe tener mas de 8 caracteres");
    } else if ( !password.match(/[A-Z]/) ){
        throw new Error ("La contraseña tiene que contener al menos una letra mayuscula");
    }  else if (!password.match(/\d/)) {
        throw new Error ("La contraseña tiene que contener al menos un numero");
    }
};

const tripExiste = async (nombre) => {
    const viaje = await Trip.findOne({nombre});

    if(viaje){
        throw new Error ("ya existe un paquete con este nombre")
    }
};

const usuarioNoExiste = async (id) => {
    const usuario = await Users.findById(id);

    if(!usuario){
        throw new Error ("El usuario no existe")
    }
};

const paqueteNoExiste = async (id) => {
    const paquete = await Trip.findById(id);

    if(!paquete){
        throw new Error ("El paquete no existe")
    }
}


module.exports = {
    emailExiste,
    validPassword,
    tripExiste,
    usuarioNoExiste,
    paqueteNoExiste,
    validarCampos
}