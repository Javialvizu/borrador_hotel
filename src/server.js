// Importamos Express
const express = require('express');

// Creamos la aplicación
const app = express();

// Definimos el puerto
const PORT = 3000;

// Middleware para recibir JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hotel Posada Santa Marta');
});

// Ruta para consultar habitaciones & Importamos la conexión a PostgreSQL
const pool = require('./config/db');

// Consultar habitaciones desde PostgreSQL
app.get('/habitaciones', async (req, res) => {

    try {

        // Ejecutamos la consulta SQL
        const resultado = await pool.query(
            'SELECT * FROM rooms ORDER BY room_id'
        );

        // Enviamos los resultados
        res.json(resultado.rows);

    } catch (error) {

        console.error('Error al consultar habitaciones:', error);

        res.status(500).json({
            mensaje: 'Error al consultar la base de datos'
        });

    }

});

// Ruta para recibir información de un cliente
app.post('/clientes', (req, res) => {

    // Recibimos los datos enviados
    const cliente = req.body;

    // Respondemos al cliente
    res.status(201).json({
        mensaje: 'Cliente recibido correctamente',
        datos: cliente
    });

});

// Ruta para consultar información del sistema
app.get('/sistema', (req, res) => {

    res.json({
        nombre: 'Hotel Posada Santa Marta',
        tecnologia: 'Node.js + Express',
        base_datos: 'PostgreSQL',
        estado: 'Funcionando'
    });

});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
