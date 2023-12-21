const { Sequelize, DataTypes} = require('sequelize');

const sqlQuery = require('../database/db');


const Administrador = sqlQuery.define(
'administrador',
{

    id_Administrador:{
        type: DataTypes. INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,

    },
})

module.exports = Administrador;
