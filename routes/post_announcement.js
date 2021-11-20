const express = require('express');
const router = express.Router();

const db = require("../db");

router.post('/postannouncement/:title/:content/:event_code?', postAnnouncement, async (req, res, next) => {
    console.log(req.params.title)
	res.send(res.locals.newannouncement)
});

async function postAnnouncement(req, res, next) { 
    if (!req.params.event_code) {
        req.params.event_code = "001";
    }
    let announcementObject = {
        event_code: req.params.event_code,
        title: req.params.title,
        content: req.params.content
    }
    const response = db.performCRUD(db.addAnnouncement, announcementObject);
    if (response) {
        response.then(function(data) {  
            res.locals.newannouncement = data;
            next();
        });
    }
    else {
        res.send({ error: "asdfasdf" });
    }
}

module.exports = router;