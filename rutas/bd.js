const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '7%tx2wKmyL)c',
    database: 'NodeJsDicsysAcademy'
});

module.exports = pool;
