require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const productosRoutes = require('./rutas/productos.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/productos', productosRoutes);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida con la base');
});

app.get('/api/categorias', (req, res) => {
    const sql = 'SELECT * FROM Categorias';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/productos/:id_categoria', (req, res) => {
    const { id_categoria } = req.params;
    const sql = 'SELECT * FROM Productos WHERE id_categoria = ?';
    db.query(sql, [id_categoria], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
