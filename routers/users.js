const express = require('express');
const router = express.Router();
const userscontroller = require('../controllers/usersController');
const { check } = require('express-validator');
const { emailExiste, validarCampos, validPassword, usuarioNoExiste } = require('../middlewares/validators');

router.get('/users', userscontroller.usuariosGet);

router.post('/createuser', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("mail", "El email es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("mail", "El correo no es valido").isEmail(),
    check("mail").custom(emailExiste),
    check("password").custom(validPassword),
    validarCampos,],
    userscontroller.usuariosPost
);

router.put('/updateuser/:id', [
    check("id", "No es un id valido").isMongoId(),
    validarCampos
], userscontroller.usuariosPut);

router.delete('/deleteuser/:id', [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(usuarioNoExiste),
    validarCampos
], userscontroller.usariosDelete);

 

module.exports = router 