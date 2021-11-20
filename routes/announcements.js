const express = require('express');
const axios = require('axios');
const router = express.Router();

const db = require("../db");

router.get('/testing', tester, async (req, res) => {
	res.send(res.locals.iss);
});

// router.post('/addannouncement', tester, async (req, res) => {
// 	let announcement = {
// 		name: req.body.name,
// 		content: req.body.content
// 	}

// 	db.performCRUD()
// });

async function tester(req, res, next) { 
	const response = await axios.get('http://api.open-notify.org/iss-now.json', { 
		// params: {
		// 	address: req.params.zipCode,
		// 	key: GCP_API_KEY
		// }
	});
	if (response.data) {
		res.locals.iss = response.data;
		next();
	}
	else {
		res.send('Something went wrong.');
	}
}

module.exports = router;