const express = require('express');
const router = express.Router();
const pool = require('./bd.js');

router.post('/', async (req, res) => {
    const { nombre, precio, id_categoria } = req.body;
    try {
        const result = await pool.query(
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
        res.status(200).json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM Productos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
