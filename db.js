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
    const attendee = req.params.attendee;
    const result = await client.db(db_name).collection(collection).findOneAndUpdate( { event_code: attendee.event_code }, { $push: { attendees: attendee } } );
    if (result.value) {
        console.log(`${attendee.name} joined the event`);
    } else {
        console.log(`${attendee.name} could not join the event`);
    }
    return attendee;
}

// get attendees from database
async function getAttendees(req){
    const response = await client.db(db_name).collection("events").find({ event_code: req.params.event_code }).toArray();
    return response[0].attendees;
}


// get announcements from database
async function getAnnouncements(){
    const response = await client.db(db_name).collection("announcements").find({}).toArray();
    return response;
}

// get speakers from database
async function getSpeakers(){
    const response = await client.db(db_name).collection("speakers").find({}).toArray();
    return response;
}

// get virtualBackgrounds from database
async function getVirtualBackgrounds(){
    const response = await client.db(db_name).collection("virtualBackgrounds").find({}).toArray();
    return response;
}

module.exports = {
    performCRUD,
    createEvent,
    addAttendee,
    listDatabases,
    getAttendees,
    getAnnouncements,
    getSpeakers,
    getVirtualBackgrounds
};

//  add event attendeees
// async function addAttendee(attendeeObject){
//     // let newAttendee = {
//     //     name: "Elaine",
//     //     email: "email@gmail.com",
//     //     role: "admin"
//     // };
//     const result = await client.db(db_name).collection("attendees").insertOne(attendeeObject);
//     console.log(`New attendee added with the following id: ${result.insertedId}`);
// }
 
// // add announcements
// async function addAnnouncement(announcementObject){
//     // let newAnnouncement = {
//     //     body: "announcement text"
//     // };
//     const result = await client.db(db_name).collection("announcements").insertOne(announcementObject);
//     console.log(`New announcement added with the following id: ${result.insertedId}`);
// }
 
// // add speakers
// async function addSpeaker(speakerObject){
//     // let newSpeaker = {
//     //     firstName: "Elaine",
//     //     lastName: "Liu",
//     //     linkedIn: "https://linkedin.com",
//     //     profilePhoto: profilePhoto,
//     //     bio: "a short bio"
//     // };
//     const result = await client.db(db_name).collection("speakers").insertOne(speakerObject);
//     console.log(`New announcement added with the following id: ${result.insertedId}`);
// }

// // add virtualBackgrounds
// async function addVirtualBackground(backgroundObject){   
//     // let newVirtualBackground = {
//     //     title: title,
//     //     description: description,
//     //     image: image,
//     //     link: link
//     // };
//     const result = await client.db(db_name).collection("virtualBackgrounds").insertOne(backgroundObject);
//     console.log(`New virtual background added with the following id: ${result.insertedId}`);
// }