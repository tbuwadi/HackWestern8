require('dotenv').config();
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

function getMessage() {
    const body = 'This is a test email using SendGrid from Node.js';
    return {
        to: 'elaineliu7g@gmail.com', // Change to your recipient
        from: 'elaineliu7g@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: body,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
}

async function sendEmail() {
    try {
        await sendGridMail.send(getMessage());
        console.log('Test email sent successfully');
    } catch (error) {
        console.error('Error sending test email');
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}
  
(async () => {
    console.log('Sending test email');
    await sendEmail();
})();