// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// add new attendee when they join
router.post('/enter-event/:name/:email/:_id', enterEvent, async (req, res) => {
	res.send(res.locals.id);
});

// add new attendee when they join
async function enterEvent(req, res, next) { 
    if (!req.params){
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
            name: "Elaine",
            email: "elaineliu7g@gmail.com",
            role: "attendee"
        };
    }
    const response = db.performCRUD(db.addAttendee, req);
    if (response) {
        response.then(function(data) {  
            res.locals.id = data;
            next();
        });
    }
    else {
        res.send('Could not add new attendee');
    }
}


// route to add speaker bio
router.post('/add-speaker/:_id/:firstName/:lastName/:email/:bio/:website', addSpeaker, async (req, res) => {
	res.send(res.locals.speaker);
});

async function addSpeaker(req, res, next) { 
    if (!req.params.speaker) {
        req.params.speaker = {
            _id: "6199244fc8af6bc5ec2ff583",
            firstName: "Elaine",
            lastName: "Liu",
            email: "elaineliu7g@gmail.com",
            bio: "Student at Western",
            website: "eliu72@github.io",
        }
    }
    const response = db.performCRUD(db.addSpeaker, req);
    if (response) {
        response.then(function(data) {  
            res.locals.speaker = data;
            next();
        });
    }
    else {
        res.send('Could not update email');
    }
}

// route to update slides url
router.post('/update-slides/:_id/:url', updateSlides, async (req, res) => {
	res.send(res.locals.slides);
});

async function updateSlides(req, res, next) {
    console.log(req.params);
    if (!req.params) {
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
            url: "https://eliu72.github.io/",
        }
    }
    const response = db.performCRUD(db.updateSlides, req);
    if (response) {
        response.then(function(data) {
            res.locals.slides = data;
            next();
        });
    }
    else {
        res.send('Could not update slides');
    }
}

// route to update playlist url
router.post('/update-playlist/:_id/:url', updatePlaylist, async (req, res) => {
    res.send(res.locals.playlist);
});

async function updatePlaylist(req, res, next) {
    if (!req.params) {
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
            url: "https://eliu72.github.io/",
        }
    }
    const response = db.performCRUD(db.updatePlaylist, req);
    if (response) {
        response.then(function(data) {
            res.locals.playlist = data;
            next();
        });
    }
    else {
        res.send('Could not update playlist');
    }
}

// route to update qna url
router.post('/update-qna/:_id/:url', updateQna, async (req, res) => {
	res.send(res.locals.qna);
});

async function updateQna(req, res, next) {
    console.log(req.params);
    if (!req.params) {
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
            url: "https://eliu72.github.io/",
        }
    }
    const response = db.performCRUD(db.updateQna, req);
    if (response) {
        response.then(function(data) {
            res.locals.qna = data;
            next();
        });
    }
    else {
        res.send('Could not update qna link');
    }
}

// route to update email content
router.post('/update-email-content/:_id/:content', updateEmailContent, async (req, res) => {
    res.send(res.locals.email);
});

async function updateEmailContent(req, res, next) {    
    if (!req.params) {
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
            content: "Thank you for attending our event!",
        }
    }
    const response = db.performCRUD(db.updateEmailContent, req);
    if (response) {
        response.then(function(data) {
            res.locals.email = data;
            next();
        });
    }
    else {
        res.send('Could not update email content');
    }
}


module.exports = router;