// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// add new attendee when they join
router.post('/enter-event/:name/:email/:_id', enterEvent, async (req, res) => {
	res.send(res.locals.attendee);
});

// add new attendee when they join
async function enterEvent(req, res, next) { 
    if (!req.params){
        req.params = {
            _id: "6199244fc8af6bc5ec2ff583",
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
router.get('/update-slides/:_id/:title/:url', updateSlides, async (req, res) => {
	res.send(res.locals.slides);
});

async function updateSlides(req, res, next) {
    if (!req.params.slides) {
        req.params.slides = {
            _id: "6199244fc8af6bc5ec2ff583",
            title: "Elaine's slides",
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
router.post('/update-playlist/:_id/:title/:url', updatePlaylist, async (req, res) => {
    res.send(res.locals.playlist);
});

async function updatePlaylist(req, res, next) {
    if (!req.params.playlist) {
        req.params.playlist = {
            _id: "6199244fc8af6bc5ec2ff583",
            title: "Elaine's playlist",
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


module.exports = router;