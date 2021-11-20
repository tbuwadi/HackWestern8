// server
const express = require('express');
const axios = require('axios');
const router = express.Router();

// get db
const db = require("../db");

// get sendgrid api key
require('dotenv').config();
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

// route to send emails
router.get('/send-emails', getAttendees, async (req, res) => {
	res.send(res.locals.attendeesList);
});

// TODO: send different emails to different users
async function getAttendees(req, res, next) { 
    const response = db.performCRUD(db.getAttendees);
    if (response) {
        response.then(function(data) {  
            res.locals.attendeesList = data;
            next();
        });
    }
    else {
        res.send('Could not get attendees list');
    }
}

// function to get list of speakers
// async function getSpeakers(req, res, next) {
//     const response = db.performCRUD(db.getSpeakers);
//     if (response.data) {
//         res.locals.speakersList = response.data;
//         next();
//     }
//     else {
//         res.send('Could not get speakers list');
//     }
// }

module.exports = router;

// function getMessage(body) {
//     const body = body;
//     return {
//         to: 'elaineliu7g@gmail.com', // Change to your recipient
//         from: 'elaineliu7g@gmail.com', // Change to your verified sender
//         subject: 'Sending with SendGrid is Fun',
//         html: `<p>${body}</p>`,
//     };
// }

// async function sendEmail() {
//     try {
//         await sendGridMail.send(getMessage());
//         console.log('Test email sent successfully');
//     } catch (error) {
//         console.error('Error sending test email');
//         console.error(error);
//         if (error.response) {
//             console.error(error.response.body)
//         }
//     }
// }
  
// (async () => {
//     console.log('Sending test email');
//     await sendEmail();
// })();