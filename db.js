// get env variables
require('dotenv').config();
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const {MongoClient} = require('mongodb');
const { response } = require('express');
const uri = `mongodb+srv://${db_username}:${db_password}@hw-2021-event-app-db.ruaew.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);


// connect to mongodb
async function performCRUD(successCallback, document) {
    let response;
    try {
        await client.connect();
        response = await successCallback(document);
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

//  add event attendeees
async function addAttendee(attendeeObject){
    // let newAttendee = {
    //     name: "Elaine",
    //     email: "email@gmail.com",
    //     role: "admin"
    // };
    const result = await client.db(db_name).collection("attendees").insertOne(attendeeObject);
    console.log(`New attendee added with the following id: ${result.insertedId}`);
}
 
// add announcements
async function addAnnouncement(announcementObject){
    // let newAnnouncement = {
    //     body: "announcement text"
    // };
    const result = await client.db(db_name).collection("announcements").insertOne(announcementObject);
    console.log(`New announcement added with the following id: ${result.insertedId}`);
}
 
// add speakers
async function addSpeaker(speakerObject){
    // let newSpeaker = {
    //     firstName: "Elaine",
    //     lastName: "Liu",
    //     linkedIn: "https://linkedin.com",
    //     profilePhoto: profilePhoto,
    //     bio: "a short bio"
    // };
    const result = await client.db(db_name).collection("speakers").insertOne(speakerObject);
    console.log(`New announcement added with the following id: ${result.insertedId}`);
}

// add virtualBackgrounds
async function addVirtualBackground(backgroundObject){   
    // let newVirtualBackground = {
    //     title: title,
    //     description: description,
    //     image: image,
    //     link: link
    // };
    const result = await client.db(db_name).collection("virtualBackgrounds").insertOne(backgroundObject);
    console.log(`New virtual background added with the following id: ${result.insertedId}`);
}

// get attendees from database
async function getAttendees(){
    const response = await client.db(db_name).collection("attendees").find({}).toArray();
    return response;
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
    listDatabases,
    addAttendee,
    addAnnouncement,
    addSpeaker,
    addVirtualBackground,
    getAttendees,
    getAnnouncements,
    getSpeakers,
    getVirtualBackgrounds
};