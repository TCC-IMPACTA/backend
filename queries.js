const connection = require('./connection');

const getAllProducts = async () => {
	const [query] = await connection.execute('SELECT * FROM produtos');

	return query;
}

module.exports = { getAllProducts };
