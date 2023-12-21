const Validar = require('../models/ValidacionTickets');
const Tickets = require('../models/Tickets');

//*********** Validamos los Tickets **********/
exports.validarTicketVendido = async (req, res) => {
    const idTicket = req.params.id;

    try {
        // vamos hacer la busqueda para validar si existe o no
        const validacion = await Validar.findOne({
            where: { ticketId: idTicket },
        });

        if (!validacion) {
            return res.status(404).json({ error: 'no se pudo encontrar el ticket' });
        }

        await validacion.update({ fecha: new Date() });

        // al momento de hacer nuestra validacion vamos a actualizar el estado del Ticket
        const ticket = await Tickets.findByPk(idTicket);
        if (ticket) {
            await ticket.update({ estado: 'Validado' });
        }

        res.status(200).json({ mensaje: 'El Ticket ha sido validado correctamente' });
    } catch (error) {
        console.error('Error al validar el ticket:', error);
        res.status(500).json({ error: 'Error de conexion del servidor' });
    }
};