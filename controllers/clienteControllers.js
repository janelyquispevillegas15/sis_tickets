const Clientes = require('../models/Clientes');


exports.mostrarcliente = async (req, res) => {
    const traerClientes = await Clientes.findAll();
    if (traerClientes.length === 0) {
        return res.status(200).json({
            msg: 'no hay clientes registrados en la db'
        });
    }
    console.log(traerClientes);
    res.json(traerClientes)
};

exports.crearCliente = async (req, res) => {
    const { nombre, apellido, dni, email, telefono, address } = req.body;

    const insertarCliente = await Clientes.create({
        nombre,
        apellido,
        dni,
        email,
        telefono,
        address,
    });
    console.log(insertarCliente);
    res.status(201).json({
        mensaje: 'Cliente insertado exitosamente'
    });

}





