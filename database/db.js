const Sequelize = require('sequelize');


const connect = new Sequelize(
    'systicket',
    'kevin',
    '123456',
  {
   host: 'localhost',
   port: 5000,
   dialect: 'mssql',
  }
);


// conexion MySQL
/*
const connect = new Sequelize(
  'tickets',
  'root',
  'secret123',
  {
    host: '172.17.0.3',
    port: 3306,
    dialect: 'mysql',
  }
);
*/

module.exports = connect;