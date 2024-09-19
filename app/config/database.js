const mysql = require('mysql2')

const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'stockwatch',
    password: 'mysql10',
})

module.exports = dbpool.promise();