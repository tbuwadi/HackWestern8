// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to create event
router.delete('/delete-speaker/:_id/:firstName/:lastName', deleteSpeaker, async (req, res) => {
	res.send(res.locals.speaker);
});

async function deleteSpeaker(req, res, next) { 
    if (!req.params.speaker) {
        req.params.speaker = {
            _id: "6199244fc8af6bc5ec2ff583",
            firstName: "Elaine",
            lastName: "Liu",
        };
    }
    const response = db.performCRUD(db.deleteSpeaker, req);
    if (response) {
        response.then(function(data) {  
            res.locals.speaker = data;
            next();
        });
    }
    else {
        res.send('Could not delete speaker');
    }
}

module.exports = router;
