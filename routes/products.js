const { Router } = require('express');

const queries = require('../queries.js');

const router = Router();

router.get('/', async (req, res) => {
	const query = await queries.getAllProducts();

	return res.status(200).json(query);
})

module.exports = router;
