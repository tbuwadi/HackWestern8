const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors');

// get announcement routes
const announcementRoutes = require('./routes/announcements');
app.use(announcementRoutes); 

// get after_event routes
const afterEventRoutes = require('./routes/after_event');
app.use(afterEventRoutes);

// get create_event routes
const createEventRoutes = require('./routes/create_event');
app.use(createEventRoutes);

// get create_event routes
const enterEvent = require('./routes/enter_event');
app.use(enterEvent);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));