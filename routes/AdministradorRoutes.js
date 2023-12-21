const express = require('express');
const { crearAdministrador, mostrarAdministrador } = require('../controllers/AdministradorControllers');

const router = express.Router();

module.exports = function(){


router.post("/crear", crearAdministrador);
router.get("/ver", mostrarAdministrador);

router.put("/ActualizarAdministrador");
router.delete("/Eliminaradministrador");

return router;
}