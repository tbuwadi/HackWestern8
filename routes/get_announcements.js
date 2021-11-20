const express = require('express');
const router = express.Router();

const db = require("../db");

router.get('/getannouncements', getAnnouncements, async (req, res, next) => {
	res.send(res.locals.announcements)
});

async function getAnnouncements(req, res, next) { 
    const response = db.performCRUD(db.getAnnouncements);
    if (response) {
        response.then(function(data) {  
            res.locals.announcements = data;
        });
        next();
    }
    else {
        res.send({ error: "Could not get announcements" });
    }
}

module.exports = router;