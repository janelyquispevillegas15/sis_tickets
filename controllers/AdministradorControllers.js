const Administrador = require('../models/administrador');
const bcrypt = require('bcrypt');


exports.mostrarAdministrador = async (req, res) => {
    const traerAdministrador = await Administrador.findAll();
    if (traerAdministrador.length === 0) {
        return res.status(200).json({
            msg: 'no hay adms registrados en la db'
        });
    }
    console.log(traerAdministrador);
    res.json(traerAdministrador)
};


exports.crearAdministrador = async (req, res) =>{
    const {nombres, correo, clave  } = req.body;

    const salt = await bcrypt.genSalt(5);
    const claveEncriptada = await bcrypt.hash(clave, salt);
    const insertarAdministrador = await Administrador.create({
        nombres,
        correo,
        clave: claveEncriptada 
    });
console.log(insertarAdministrador);
 res.status(201).json({
    mensaje: 'Administrador insertado exitosamente'
 });

}