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
var ObjectId = require('mongodb').ObjectID;
const { ObjectID } = require('bson');


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
    const newEvent = req.params;
    const result = await client.db(db_name).collection(collection).insertOne(newEvent);
    if (result.ok) {
        console.log(`New event added with the following id: ${result.insertedId}`);
    } else {
        console.log(`Event creation failed`);
    }
    return result.insertedId;
}

// add attendee to event
async function addAttendee(req){
    const id = req.params._id;
    const attendee = req.params;
    delete attendee._id;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(id) }, { $push: { attendees: attendee } } );
    if (result.ok) {
        console.log(`${attendee.name} joined the event`);
    } else {
        console.log(`${attendee.name} could not join the event`);
    }
    return id;
}

// add announcement
async function addAnnouncement(announcementObject){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(announcementObject._id) }, { $push: { announcements: announcementObject } } );
    if (result.ok) {
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
    const response = await client.db(db_name).collection("events").find({ _id: ObjectID(req.params._id) }).toArray();
    return response[0].attendees;
}


// get speakers from database
async function getSpeakers(req){
    const response = await client.db(db_name).collection("events").find({_id: ObjectID(req.params._id)}).toArray();
    return response[0].speakers;
}

// add speakers
async function addSpeaker(req){
    const speaker = req.params.speaker;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(speaker._id) }, { $push: { speakers: speaker } } );
    if (result.ok) {
        console.log(`${speaker.firstName} added to event info`);
    } else {
        console.log(`${speaker.firstName} failed to be added`);
    }
    return speaker;
}

// add slides
async function updateSlides(req){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(req.params._id) }, { $set: { slides: req.params.url } } );
    if (result.ok) {
        console.log('New slides added to event');
    } else {
        console.log('Slides failed to be added');
    }
    return result;
}

// update playlist
async function updatePlaylist(req){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(req.params._id) }, { $set: { playlist: req.params.url } } );
    if (result.ok) {
        console.log(`New playlist added to event`);
    } else {
        console.log(`Playlist failed to be added`);
    }
    return result;
}

// update qna
async function updateQna(req){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(req.params._id) }, { $set: { qna: req.params.url } } );
    if (result.ok) {
        console.log(`New qna link added to event`);
    } else {
        console.log(`Qna link failed to be added`);
    }
    return result;
}

// update email content
async function updateEmailContent(req){
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(req.params._id) }, { $set: { emailContent: req.params.content } } );
    if (result.ok) {
        console.log(`New email content added to event`);
    } else {
        console.log(`Email content failed to be added`);
    }
    return result;
}

// get playlist url from database
async function getPlaylist(req){
    const response = await client.db(db_name).collection("events").find({_id: ObjectID(req.params._id) }).toArray();
    return response[0].playlist;
}

//get slides url from database
async function getSlides(req){
    const response = await client.db(db_name).collection("events").find({_id: ObjectID(req.params._id) }).toArray();
    return response[0].slides;
}

// delete speaker from database
async function deleteSpeaker(req){
    const speaker = req.params.speaker;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { _id: ObjectID(speaker._id ) }, { $pull: { speakers: { firstName: speaker.firstName } } } );
    if (result.ok) {
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
    updateQna,
    updateEmailContent,
    listDatabases,
    getAnnouncements,
    getAttendees,
    getSpeakers,
    getPlaylist,
    getSlides,
    deleteSpeaker,
};