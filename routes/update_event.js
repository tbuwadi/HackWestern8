// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to create event
// router.post('/update-event', createEvent, async (req, res) => {
// 	res.send(res.locals.event);
// });

// async function updateEmail(req, res) { 
//     if (!req.params.event_code) {
//         req.params.event_code = {
//             event_code: "001",
//         };
//     }
//     const response = db.performCRUD(db.updateEmail, req);
//     if (response) {
//         response.then(function(data) {  
//             res.locals.email = data;
//         });
//     }
//     else {
//         res.send('Could not update email');
//     }
// }

module.exports = router;