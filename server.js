const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors());

// get announcement routes
const getAnnouncementsRoute = require('./routes/get_announcements');
app.use(getAnnouncementsRoute); 

const postAnnouncementRoute = require('./routes/post_announcement');
app.use(postAnnouncementRoute); 

// get after_event routes
const afterEventRoutes = require('./routes/after_event');
app.use(afterEventRoutes);

// get create_event routes
const createEventRoutes = require('./routes/create_event');
app.use(createEventRoutes);

// get read event routes
const readEvent = require('./routes/read_event');
app.use(readEvent);

// get update_event routes
const updateEvent = require('./routes/update_event');
app.use(updateEvent);

// get delete event resources routes
const deleteResources = require('./routes/delete_resources');
app.use(deleteResources);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));