// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to create event
router.get('/enter-event', enterEvent, async (req, res) => {
	res.send(res.locals.attendee);
});

// TODO: send different emails to different users
async function enterEvent(req, res, next) { 
    if (!req.params.attendee){
        req.params.attendee = {
            event_code: "001",
            name: "Elaine",
            email: "elaineliu7g@gmail.com",
            role: "attendee"
        }
    }
    const response = db.performCRUD(db.addAttendee, req);
    if (response) {
        response.then(function(data) {  
            res.locals.attendee = data;
            console.log(data);
            next();
        });
    }
    else {
        res.send('Could not add new attendee');
    }
}

module.exports = router;
