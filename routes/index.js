const express = require('express');
const clientesRoutes = require('./ClienteRoutes');
const administradorRoutes = require('./AdministradorRoutes');
const TicketsRoutes = require('./TicketsRoutes');


const router = express.Router();

router.use('/clientes', clientesRoutes());
router.use('/administrador', administradorRoutes());
router.use('/tickets', TicketsRoutes());




module.exports = router;