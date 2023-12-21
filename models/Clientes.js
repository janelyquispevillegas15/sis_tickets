const { Sequelize, DataTypes} = require('sequelize');
const sqlQuery = require('../database/db');

const Clientes = sqlQuery.define(
     'clientes',
     {
          id_cliente: {

               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true
          },
          nombre: {

               type: DataTypes.STRING(25),
               allowNull: false

          },
          apellido: {
               type: DataTypes.STRING(25),
               allowNull: false
          },
          dni: {

               type: DataTypes.STRING,
               allowNull: false
          },

          email: {
               type: DataTypes.STRING,
               allowNull: false
          },

          telefono: {
               type: DataTypes.STRING,
               allowNull: false
          },
          address: {
               type: DataTypes.STRING,
               allowNull: false
          },

     },
     {
          timestamps: true,
     }
);

module.exports = Clientes;