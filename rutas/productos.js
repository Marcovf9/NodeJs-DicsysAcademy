const express = require('express');
const router = express.Router();
const pool = require('./bd.js');

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM Productos');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener productos por categoría
router.get('/categoria/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    try {
        const [results] = await pool.query('SELECT * FROM Productos WHERE id_categoria = ?', [id_categoria]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const { nombre, precio, id_categoria } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO Productos (nombre, precio, id_categoria) VALUES (?, ?, ?)',
            [nombre, precio, id_categoria]
        );
        res.status(201).json({ message: 'Producto creado', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, id_categoria } = req.body;
    try {
        await pool.query(
            'UPDATE Productos SET nombre = ?, precio = ?, id_categoria = ? WHERE id = ?',
            [nombre, precio, id_categoria, id]
        );
        res.json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM Productos WHERE id = ?', [id]);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;