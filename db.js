const {MongoClient} = require('mongodb');
const db_name = "virtual_event_app";

var config = require('./passwords.json');
const db_username = config.db_username;
const db_password = config.db_password;

const uri = `mongodb+srv://${db_username}:${db_password}@hw-2021-event-app-db.ruaew.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

// connect to mongodb
async function performCRUD(successCallback, document) {
    try {
        await client.connect();
        await successCallback(document);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
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

// in react, store info in an object and pass it to this function
let newAttendee = {
    name: "Elaine",
    email: "elaineliu7g@gmail.com",
    role: "admin"
};

performCRUD(addAttendee, newAttendee).catch(console.error);
