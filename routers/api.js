const express = require('express');
const router = express.Router();
const apicontroller  = require ('../controllers/apibusquedaController')



router.get('/busqueda', apicontroller.busquedaApi);



module.exports = router 