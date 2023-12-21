const express = require('express');

const sequelize = require('./database/db');

//const rutas = require('./routes/ClienteRoutes');
//const rutas = require('./routes/TicketsRoutes');
//const rutas = require('./routes/AdministradorRoutes');
const rutas = require('./routes');


const port = 3000;

const app = express();

app.use(express.json());

app.use("/", rutas);



app.use((req, res, next) => {
    res.status(404).json({ error: 'La pagina que buscas no existe' });
});

async function ejecutar() {
    try{
        await sequelize.sync({force: false});
        console.log('La conexion a la base de datos fue exitosa ');

        app.listen(port, console.log(`servidor ejecutandose en http://localhost:${port}`));

    }catch (error) {
        console.error('conexion fallida a la base de datos',error)
    }
}

ejecutar() ;