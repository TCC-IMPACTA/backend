const connection = require('./connection');

const getAllProducts = async () => {
	const [query] = await connection.execute('SELECT * FROM produtos');

	return query;
}

const createProduct = async (produto, valor) => {
	const [query] = await connection.execute('INSERT INTO produtos (produto, valor) VALUES (?, ?)', [produto, valor]);

	return query;
}

const updateProduct = async (id, produto, valor) => {
	const [query] = await connection.execute('UPDATE produtos SET produto = ?, valor = ? WHERE id = ?', [produto, valor, id]);

	return query;
}

const deleteProduct = async (id) => {
	const [query] = await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);

	return query;
}

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };
