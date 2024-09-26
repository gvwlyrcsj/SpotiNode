const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const songController = require('../controllers/Controller');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Define the routes
router.get('/player/:id', songController.getPlayer);
router.post('/upload', upload.fields([{ name: 'mp3file', maxCount: 1 }, { name: 'albumCover', maxCount: 1 }]), songController.uploadSong);
router.post('/delete', songController.deleteSong);

module.exports = router;
