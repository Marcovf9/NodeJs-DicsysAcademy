const express = require('express');
const router = express.Router();
const pool = require('./bd.js');

router.get('/', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM Categorias');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener categorías', details: err.message });
    }
});

module.exports = router;