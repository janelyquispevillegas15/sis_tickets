const Tickets = require('../models/Tickets');
const Validar = require('../models/ValidacionTickets');
const Clientes = require('../models/Clientes');


exports.crearUnTicket = async (req, res) => {
    const { estado, precio, numero, detalleVenta, clienteId } = req.body;
    try {
        // Crear el ticket en la base de datos
        const venderTicket = await Tickets.create({
            estado: 'No validado',
            precio,
            numero,
            detalleVenta: 'Venta exitosa',
            clienteId,
        });

        // Obtenemos el ID del ticket creado
        const idTicket = venderTicket.id_ticket;

        // Crear la validación
        await Validar.create({
            ticketId: idTicket,
        });

        res.status(201).json({ mensaje: 'Ticket ha sido creado correctamente' });
    } catch (error) {
        console.error('Error al crear el ticket y realizar la validación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

/******** Anulacion del Ticket ********/
exports.anularTicket = async (req, res) => {
    const idTicket = req.params.id;
    const motivoAnulacion = req.body.detalleVenta;

    try {
        // llamamos al ticket por su ID de la DB
        const ticket = await Tickets.findByPk(idTicket);

        if (!ticket) {
            return res.status(404).json({ error: 'Ticket no encontrado' });
        }

         // Verificamos si el ticket ya ha sido validado o anulado
         if (ticket.estado === 'Anulado') {
            return res.status(400).json({ error: 'Ya No se puede anular el  ticket: ya fue anulado' });
        }

        // Verificamos si el ticket ya ha sido validado o anulado
        if (ticket.estado === 'Validado') {
            return res.status(400).json({ error: 'Ya No se puede anular el  ticket porque esta validado' });
        }

        await ticket.update({ estado: 'Anulado', detalleVenta: motivoAnulacion || null });

        res.status(200).json({ mensaje: 'El Ticket ha sido anulado correctamente' });
    } catch (error) {
        console.error('Error al anular el ticket:', error);
        res.status(500).json({ error: 'Error de conexion del servidor' });
    }
};


exports.verTickets = async (req, res) => {
    try {
        const traerTickets = await Tickets.findAll({
            include: [
                {
                    model: Clientes,
                    as: 'cliente',
                    attributes: ['nombre', 'apellido'],
                },
            ],
        });
        if (traerTickets.length === 0) {
            return res.status(200).json({
                msg: 'no hay tickets registrados en la db'
            });
        }
        res.status(200).json(traerTickets);
    } catch (error) {
        console.error('Error al mostrar la lista de tickets:', error);
        res.status(500).json({ error: 'Error de conexión del servidor' });
    }
};


exports.mostrartickets = async (req, res) => {
    const traerTickets = await Tickets.findAll();
    if (traerTickets.length === 0) {
        return res.status(200).json({
            msg: 'no hay tickets registrados en la db'
        });
    }
    console.log(traerTickets);
    res.json(traerTickets)
};

exports.crearTickets =async (req, res) =>{
    const { id_Tickets, estado, Precio, numero  } = req.body;
    const insertarTickets = await Tickets.create({
        id_Tickets,
        estado,
        Precio,
        numero
    });
console.log(insertarTickets);
 res.status(201).json({
    mensaje: 'Tickets insertado exitosamente'
 });

}

