// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to create event
router.put('/create-event/:_id/:title', createEvent, async (req, res) => {
	res.send(res.locals.event);
});

async function createEvent(req, res, next) { 
    if (!req.params.event_details) {
        req.params.event_details = {
            title: "Hack Western"
        };
    }
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
