// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// route to get speakers
router.get('/get-speakers', getSpeakers, async (req, res) => {
	res.send(res.locals.speakers);
});

async function getSpeakers(req, res, next) { 
    if (!req.params.event_code) {
        req.params.event_code = "001";
    }
    const response = db.performCRUD(db.getSpeakers, req);
    if (response) {
        response.then(function(data) {  
            res.locals.speakers = data;
            next();
        });
    }
    else {
        res.send('Could not get list of speakers');
    }
}

// route to get playlist
router.get('/get-playlist', getPlaylist, async (req, res) => {
    res.send(res.locals.playlist);
});

async function getPlaylist(req, res, next) {
    if (!req.params.event_code) {
        req.params.event_code = "001";
    }
    const response = db.performCRUD(db.getPlaylist, req);
    if (response) {
        response.then(function(data) {
            res.locals.playlist = data;
            next();
        });
    }
    else {
        res.send('Could not get playlist url');
    }
}

// route to get slides
router.get('/get-slides', getSlides, async (req, res) => {
    res.send(res.locals.slides);
});
async function getSlides(req, res, next) {
    if (!req.params.event_code) {
        req.params.event_code = "001";
    }
    const response = db.performCRUD(db.getSlides, req);
    if (response) {
        response.then(function(data) {
            res.locals.slides = data;
            next();
        });
    }
    else {
        res.send('Could not get slides');
    }
}


module.exports = router;