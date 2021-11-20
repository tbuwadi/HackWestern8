const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _id : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    title: String, // String is shorthand for {type: String}
    slide: String,
    qa: String,
    spotify: String,
    backgrounds: [{ image: String }],
    attendees: [{ name: String, email: String, role: String }],
    speakers: [{ firstName: String, lastName: String, email: String, role: String, bio: String, website: String, image: String }],
    post_event: String,
    notifs: [{ msg: String }]
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;