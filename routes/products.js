const { Router } = require('express');

const queries = require('../queries.js');

const router = Router();

router.get('/', async (req, res) => {
	const query = await queries.getAllProducts();

	return res.status(200).json(query);
})

router.post('/', async (req, res) => {
	const { produto, valor } = req.body;

	const query = await queries.createProduct(produto, valor);

	return res.status(201).json(query);
});

router.put('/', async (req, res) => {
	const { id, produto, valor } = req.body;

	const query = await queries.updateProduct(id, produto, valor);

	console.log(query);

	if (!query.affectedRows) {
		return res.status(400).json({ message: 'ID informado não existe.' });
	};
	
	return res.status(200).json({ message: 'Produto atualizado com sucesso.' });
});

router.delete('/', async (req, res) => {
	const { id } = req.body;

	const query = await queries.deleteProduct(id);

	if (!query.affectedRows) {
		return res.status(400).json({ message: 'ID informado não existe.' });
	};
	
	return res.status(200).json({ message: 'Produto deletado com sucesso.' });
});

module.exports = router;
