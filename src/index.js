// importar modulos
const express = require('express');
const cors = require('cors');
const app = express();

// middlewares globales
app.use(cors());
app.use(express.json());

// importar rutas
const carrosRouter = require('./routes/carroRoute');


// usar rutas
app.use('/carros', carrosRouter);


// exportar app
module.exports = app;
