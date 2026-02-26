require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const productosRoutes = require('./rutas/productos.js');
const categoriasRoutes = require('./rutas/categorias.js');

// Definición de puntos de entrada de la API
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor profesional escuchando en el puerto ${PORT}`);
});