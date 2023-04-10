const mysql = require('mysql2');

const pool = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Peeyush#5979'
});

module.exports = pool.promise();