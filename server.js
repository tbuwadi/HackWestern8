const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors');

// get announcement routes
const announcementRoutes = require('./routes/announcements');
app.use(announcementRoutes); 

// get post_event routes
const postEventRoutes = require('./routes/post_event');
app.use(postEventRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));