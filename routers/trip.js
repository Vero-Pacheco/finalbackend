const express = require('express');
const router = express.Router();
const tripscontroller = require('../controllers/tripController');
const { check } = require('express-validator');
const { tripExiste, validarCampos, paqueteNoExiste, stockAgotado } = require('../middlewares/validators');


router.get('/trips', tripscontroller.viajeGet);

router.post('/createtrip', [
    check("nombre").custom(tripExiste),
    validarCampos
],
    tripscontroller.viajePost);

router.put('/updatetrip/:id', tripscontroller.viajePut);

router.delete('/hidetrip/:id', [
    check("id", "No es un id valido").isMongoId(),
    validarCampos
], tripscontroller.viajeHide);


router.delete('/deletetrip/:id', [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(paqueteNoExiste),
    validarCampos
], tripscontroller.viajeDelete);


module.exports = router 