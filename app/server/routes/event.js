const router = require('express').Router();  //create router
let User = require('../model/event.model');  // use mongoose models


// handling the get request
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));
});

// handling the post request
router.route('/add-event-code').post((req, res) => {
    const _id = req.body._id; // user name is part of the request body
    const newEvent = new Event({_id});

    // save new username to the mongodb database
    newEvent.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

// handling the post request
router.route('/add-attendee').post((req, res) => {
    const username = req.body.username; // user name is part of the request body
    const newUser = new User({username});

    // save new username to the mongodb database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;