const { Sequelize, DataTypes} = require('sequelize');

const sqlQuery = require('../database/db');
const Tickets = require('./Tickets');

const Validar = sqlQuery.define(
     'validartique',
     {

          id_validar: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true
          },

          fecha: {
               type: DataTypes.DATE,
          },
          ticketId: {

               type: DataTypes.INTEGER,
               references: {
                    model: Tickets,
                    key: "id_ticket",
               },

          },

     },
     {
          timestamps: false,
     }
);

module.exports = Validar;



