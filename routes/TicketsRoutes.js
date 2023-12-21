const express = require('express');
const { crearUnTicket, verTickets, anularTicket } = require('../controllers/TicketsControllers');
// validacion de ticket
const { validarTicketVendido } = require('../controllers/validarTickets');

const router = express.Router();

module.exports = function(){


router.post("/crear", crearUnTicket);
router.get("/ver", verTickets);
router.put("/anular/:id", anularTicket);
// mi ruta de validacion
router.put("/validar/:id", validarTicketVendido);

return router;
}