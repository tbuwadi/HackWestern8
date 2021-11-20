// get env variables
require('dotenv').config();
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;
const collection = process.env.COLLECTION;

const {MongoClient} = require('mongodb');
const { response } = require('express');
const uri = `mongodb+srv://${db_username}:${db_password}@hw-2021-event-app-db.ruaew.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);


// connect to mongodb
async function performCRUD(successCallback, req) {
    let response;
    try {
        await client.connect();
        response = await successCallback(req);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
        return response;
    }
}

// function lists all databases
async function listDatabases(){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// create event and add to db
async function createEvent(req) {
    const newEvent = req.params.event_details;
    const result = await client.db(db_name).collection(collection).insertOne(newEvent);
    if (result.value) {
        console.log(`New event added with the following id: ${result.insertedId}`);
    } else {
        console.log(`Event creation failed`);
    }
    return newEvent;
}

// add attendee to event
async function addAttendee(req){
    const attendee = req.params;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: attendee.event_code }, { $push: { attendees: attendee } } );
    if (result.value) {
        console.log(`${attendee.name} joined the event`);
    } else {
        console.log(`${attendee.name} could not join the event`);
    }
    return attendee;
}

// add announcement
async function addAnnouncement(announcementObject){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: announcementObject.event_code }, { $push: { announcements: announcementObject } } );
    if (result.value) {
        console.log(`${announcementObject.title} added to announcements`);
    } else {
        console.log(`${announcementObject.title} announcement failed to be added`);
    }
    return announcementObject;
}

// get announcements
async function getAnnouncements(req){
    const response = await client.db(db_name).collection("events").find().toArray();
    return response[0].announcements;
}

// get attendees from database
async function getAttendees(req){
    const response = await client.db(db_name).collection("events").find({ event_code: req.params.event_code }).toArray();
    return response[0].attendees;
}


// get speakers from database
async function getSpeakers(req){
    const response = await client.db(db_name).collection("events").find({event_code: req.params.event_code}).toArray();
    return response[0].speakers;
}

// add speakers
async function addSpeaker(req){
    const speaker = req.params.speaker;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: speaker.event_code }, { $push: { speakers: speaker } } );
    if (result.value) {
        console.log(`${speaker.firstName} added to event info`);
    } else {
        console.log(`${speaker.firstName} failed to be added`);
    }
    return speaker;
}

// add slides
async function updateSlides(req){
    const slides = req.params.slides;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: slides.event_code }, { $set: { slides: slides } } );
    if (result.value) {
        console.log(`${slides.title} added to event`);
    } else {
        console.log(`${slides.title} failed to be added`);
    }
    return slides;
}

// update playlist
async function updatePlaylist(req){
    const playlist = req.params.playlist;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: playlist.event_code }, { $set: { playlist: playlist } } );
    if (result.value) {
        console.log(`${playlist.title} added to event`);
    } else {
        console.log(`${playlist.title} failed to be added`);
    }
    return playlist;
}

// get playlist url from database
async function getPlaylist(req){
    const response = await client.db(db_name).collection("events").find({event_code: req.params.event_code}).toArray();
    return response[0].playlist;
}

//get slides url from database
async function getSlides(req){
    const response = await client.db(db_name).collection("events").find({event_code: req.params.event_code}).toArray();
    return response[0].slides;
}

// delete speaker from database
async function deleteSpeaker(req){
    const speaker = req.params.speaker;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: speaker.event_code }, { $pull: { speakers: { firstName: speaker.firstName } } } );
    if (result.value) {
        console.log(`${speaker.firstName} removed from event`);
    } else {
        console.log(`${speaker.firstName} failed to be removed`);
    }
    return speaker;
}


module.exports = {
    performCRUD,
    createEvent,
    addAttendee,
    addAnnouncement,
    addSpeaker,
    updateSlides,
    updatePlaylist,
    listDatabases,
    getAnnouncements,
    getAttendees,
    getSpeakers,
    getPlaylist,
    getSlides,
    deleteSpeaker,
};