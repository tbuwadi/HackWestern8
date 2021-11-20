const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event_code : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    title: {
        type: String,
    },
    slide: {
        type: String,
    },
    qa: {
        type: String,
    },
    spotify: {
        type: String,
    },
    zoom: {
        type: Array,
    },
    title: {
        type: String,
    },
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;