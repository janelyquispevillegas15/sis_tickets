const express = require('express');
const { crearCliente, mostrarcliente } = require('../controllers/clienteControllers');

const router = express.Router();

module.exports = function(){


router.post("/crear", crearCliente);
router.get("/ver", mostrarcliente);

router.put("/ActualizarCliente");
router.delete("/Eliminarclientes");

return router;
}


  