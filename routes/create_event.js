// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to create event
router.put('/create-event/:title', createEvent, async (req, res) => {
	res.send(res.locals.event);
});

async function createEvent(req, res, next) { 
    if (!req.params) {
        req.params = {
            title: "Hack Western"
        };
    }
    console.log(req.params);
    const response = db.performCRUD(db.createEvent, req);
    if (response) {
        response.then(function(data) {  
            res.locals.event = data;
            next();
        });
    }
    else {
        res.send('Could not create new event');
    }
}

module.exports = router;
