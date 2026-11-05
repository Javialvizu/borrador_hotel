// Cargamos las variables del archivo .env
require('dotenv').config();

// Importamos Pool desde pg
const { Pool } = require('pg');

// Creamos el grupo de conexiones
const pool = new Pool({

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD

});

// Exportamos la conexión
module.exports = pool;
