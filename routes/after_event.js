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

// TODO: send different emails to different users
function getAttendees(req, res) { 
    if (!req.params.event_code) {
        req.params.event_code = "001";
    }
    const response = db.performCRUD(db.getAttendees, req);
    return response;
}

function getMessage(attendee, body) {
    return {
        to: attendee.email, // Change to your recipient
        from: 'elaineliu7g@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        html: `<p>Hi ${attendee.name}! <br> ${body}</p>`,
    };
}

router.get('/send-emails', sendEmail, async (req, res, next) => {
	res.send(res.locals.emails_sent);
});

async function sendEmail(req, res, next) {
    try {
        let emails_sent = [];
        const attendeesList = await getAttendees(req, res);
        console.log(attendeesList);
        for (let i = 0; i < attendeesList.length; i++) {
            const attendee = attendeesList[i];
            const message = getMessage(attendee, 'Thank you for coming to HackWestern8!');
            const response = await sendGridMail.send(message);
            emails_sent.push(attendee.email);
        }
        console.log(emails_sent);
        res.locals.emails_sent = emails_sent;
        next();
    } catch (error) {
        console.error(error);
        console.error('Error sending emails');
        if (error.response) {
            console.error(error.response.body)
        }
    }
}

// async function getEmail(req, res, next) { 
//     if (!req.params.event_code) {
//         req.params.event_code = "001";
//     }
//     const response = db.performCRUD(db.getEmail, req);
//     console.log(response);
//     if (response) {
//         response.then(function(data) {  
//             res.locals.email = data;
//             next();
//         });
//     }
//     else {
//         res.send('Could not get email content');
//     }
// }

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



  
// (async () => {
//     console.log('Sending test email');
//     await sendEmail();
// })();

module.exports = router;
