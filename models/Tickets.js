const { Sequelize, DataTypes} = require('sequelize');

const sqlQuery = require('../database/db');
const Clientes = require('./Clientes');

const Tickets = sqlQuery.define(
     'tickets',
     {
          id_ticket: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true
          },
          estado: {
               type: DataTypes.ENUM,
               values: ["No validado", "Validado", "Anulado"],
               default: "No validado",
          },
          precio: {
               type: DataTypes.DECIMAL(10, 2),
               allowNull: false
          },
          numero: {
               type: DataTypes.STRING,
               len: 50,
          },
          detalleVenta: {
               type: DataTypes.STRING,
               allowNull: true,
               defaultValue: "Venta exitosa",
          },
          clienteId: {
               type: DataTypes.INTEGER,
               references: {
                    model: Clientes,
                    key: "id_cliente"
               }

          }
     },
     {
          timestamps: true,
     }
);

Tickets.belongsTo(Clientes, { foreignKey: 'clienteId', as: 'cliente' });

module.exports = Tickets;
