const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//user: userLevita
//password: SpDBQF0G5jxEgQnD
//String Conexion: mongodb+srv://userLevita:SpDBQF0G5jxEgQnD@cluster0.wpes5.mongodb.net/test


//CÓDIGO PARA DESPLEGAR SERVIDOR
const server = express();

//Configuración de CORS
server.use(cors());

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el 1er Servicio REST'
    });
});

dbconection();

//console.log(process.env);

server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + process.env.PORT),
        console.log('Jhonn Levita Huingo')
});