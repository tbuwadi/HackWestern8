# HackWestern8

## 🤩 PLEASE CHECK OUT OUR TECH DEMO (different from demo video)! 
https://drive.google.com/file/d/1c_XGoqwbMdeX1HgR-qO9FQRSfVnyyhMD/view?usp=sharing
 
## Inspiration
Ever been a panelist at a virtual event speaking into the dark abyss of cameras off?
 
What about running a virtual event? Setting up your Google Slide, a Slido for audience Q&A, a Spotify playlist to share during breaks, and a feedback form to share with all participants... only to realize you forgot to open one of those tabs and you end up screen sharing your entire desktop with your spicy dms to your significant other while trying to find your other tab.
 
These are pain points we face every day as execs on student clubs like the Women in Tech Society, where we plan virtual events for 40-70 students every month. For our virtual events, we consistently have to screen-share 3-4 different platforms for a successful event. We also have to get creative with how we engage with event attendees, which just adds more frustration to our event planning.
 
We needed a solution that could:
1.       Combine the features of our favourite event planning platforms to increase event planning efficiency
2.       Creatively increase engagement with event attendees who have cameras off
 
We call this "Fusion"
 
## What it does
Fusion is an all in one event planning platform, that combines features of our favourite event planning platforms into one simple webpage that can be screen shared during an online event.
For event moderators, Fusion is a webpage that:
- Integrates with your Google Slides presentation
- Integrates with Spotify for welcome & break music
- Integrates with Slido for easy audience  Q&A
- Send out and pin important announcements, which normally get lost in chats
- Has the ability to email all participants after an event (thank you notes and feedback forms)
 
For event attendees, Fusion is a simple webpage that:
- Allows them to pick a customized zoom background for the event to encourage cameras on
- Integrates with Slido for easy Q&A without visiting another platform
- Allows them to see event details, speakers & announcements
 
Fusion is made to be simple. Event attendees don’t have to register or create an account, and can access Fusion in all its glory through the event specific URL, which is easy to share.
 
## How we built it
Tech Stack: MERN (Mongodb, Express.js, React.js, Node.js), Twilio Sendgrid for automated emails
Design: Figma
- Event settings are sent in through the Admin Portal (client side) and uploaded to our database by accessing the Node backend endpoints using Express (server)
- Database is queried for a specific event ID and the appropriate content is displayed for admins and attendees
- Attendees join an event using the unique event ID and their info is added to our database
- With the click of a button, the Twilio Sendgrid integration sends a customized email to all attendees
 
## Challenges we ran into
Elaine: This is my first time working with Node and Express and had challenges getting accustomed to JavaScript.  (If you see pythonic-style JavaScript, it was probably committed by me!) Because of this learning curve, I had difficulties making requests to our backend using Axios. It was also my first time setting up a Mongodb database so there was a bit of learning here as well.

Eng: I think the most challenging part about this Hackathon was collaborating in a team setting and learning to resolve merge conflicts with Git!

 
## Accomplishments that we're proud of
As event organizers ourselves, we’re so proud of creating a tool that will help us solve many of our pain points running events in the future. We hope to continue to work on Fusion so that we can launch it and use Fusion in some of our own events!
 
 
## What we learned
For some of us, we learned a lot about new languages and tools such as Node.js, Mongodb, and Twilio. It was also fun to learn more about the virtual event space during our preliminary research and better understand some of the most common pain points experienced by both attendees and organizers. We were also able to look into other tools and APIs and get a good sense of next steps we want to take with this app! 
 
 
## What's next for Fusion
We hope to continue work on this after the hackathon and hope to turn into a mini Startup. We are hoping to integrate with the Zoom API to leverage some of its features such as chat and event creation abilities. 
