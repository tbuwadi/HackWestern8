const express = require('express');
const multer = require('multer');

const router = express.Router();

const db = require("../db");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './wits-bg')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname )
    }
});

const upload = multer({ storage: fileStorageEngine })

router.post('/upload_image', upload.single('img-key'), (req, res) => {
    console.log(req.file);
	res.send("Single file uploaded successfully.");
});

module.exports = router;