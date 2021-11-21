const express = require('express');
const fs = require('fs');
const path = require('path');
const _ = require('underscore');

const router = express.Router();

router.post('/download_image/:option?', download, (req, res, next) => {
    console.log(`Downloading image...${res.locals.file}`);
	res.download(res.locals.file);
});

function download(req, res, next) { 
    // if a specific image is requested, return it
    if (req.params.option) {
        res.locals.file = `./wits-bg/${req.params.option}`;
    }
    // otherwise, pick the most recent image
    else {
        res.locals.file = `./wits-bg/${getMostRecentFileName('./wits-bg')}`;
    }
    next();
}

function getMostRecentFileName(dir) {
    var files = fs.readdirSync(dir);

    // use underscore for max()
    return _.max(files, function (f) {
        var fullpath = path.join(dir, f);

        // ctime = creation time is used
        // replace with mtime for modification time
        return fs.statSync(fullpath).ctime;
    });
}

module.exports = router;