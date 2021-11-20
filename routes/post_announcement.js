const express = require('express');
const router = express.Router();

const db = require("../db");

router.post('/postannouncement', async (req, res, next) => {
    console.log(req.params.title)
	res.send({fd: "fdfdfd"})
});

async function postAnnouncement(req, res, next) { 
    let announcementObject = [{
        title: req.body.title,
        content: req.body.content
    }]
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