const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	port: 3306,
	database: 'tcc-impacta',
	user: 'root',
	password: 'root',
});

module.exports = connection;
