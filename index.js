const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

require('dotenv').config();


// crear el servidor de express

const app = express();

// Base de Datos 

dbConnection();

// CORS

app.use(cors());

// Directorio Publico

app.use(express.static('public'));

// Lectura y parseo del Body

app.use(express.json());



// Rutas
app.use('/api/auth', require('./routes/auth'));

app.use('/api/events', require('./routes/events'));

// TODO: rutas de auth // crear, login, renew del token
// TODO: CRUD: Eventos



// Escuchar peticiones

app.listen( process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);    
});
