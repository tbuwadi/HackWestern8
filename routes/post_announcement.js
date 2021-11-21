const express = require('express');
const router = express.Router();

const db = require("../db");

router.post('/postannouncement/:title/:content/:_id', postAnnouncement, async (req, res, next) => {
    console.log(req.params.title)
	res.send(res.locals.newannouncement)
});

async function postAnnouncement(req, res, next) { 
    if (!req.params._id) {
        req.params._id = "6199244fc8af6bc5ec2ff583";
    }
    let announcementObject = {
        _id: req.params._id,
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