require('dotenv').config();

const pool = require('./src/config/db');

async function probarConexion() {

    try {

        const resultado = await pool.query(
            'SELECT NOW() AS fecha_actual'
        );

        console.log('¡Conexión exitosa!');
        console.log(resultado.rows[0]);

    } catch (error) {

        console.error('Error de conexión:', error.message);

    } finally {

        await pool.end();

    }
}

probarConexion();
