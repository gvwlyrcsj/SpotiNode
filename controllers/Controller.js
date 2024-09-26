const path = require('path');
const fs = require('fs');
const db = require('../config/db'); // Database connection

// Fetch all songs from the database
exports.getUploadedSongs = (req, res) => {
    const query = 'SELECT * FROM songs ORDER BY uploaded_at DESC';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { songs: results });
    });
};

// Render the player page with a specific song
exports.getPlayer = (req, res) => {
    const songId = req.params.id;
    const query = 'SELECT * FROM songs WHERE id = ?';
    db.query(query, [songId], (err, results) => {
        if (err) return res.status(500).send('Database query failed');
        if (results.length === 0) return res.status(404).send('Song not found');
        res.render('player', { song: results[0] });
    });
};

// Handle MP3 and album cover uploads
exports.uploadSong = (req, res) => {
    const uploaderName = req.body.uploaderName;
    const mp3File = req.files['mp3file'][0];
    const albumCover = req.files['albumCover'] ? req.files['albumCover'][0] : null;

    const filename = mp3File.filename;
    const filepath = `/uploads/${filename}`;
    const albumCoverPath = albumCover ? `/uploads/${albumCover.filename}` : null;

    const query = 'INSERT INTO songs (filename, filepath, album_cover, uploader_name) VALUES (?, ?, ?, ?)';
    db.query(query, [filename, filepath, albumCoverPath, uploaderName], (err, result) => {
        if (err) return res.status(500).send('Database error');
        res.redirect('/');
    });
};

// Handle song deletion
exports.deleteSong = (req, res) => {
    const songId = req.body.song_id;
    const query = 'SELECT filepath, album_cover FROM songs WHERE id = ?';

    db.query(query, [songId], (err, results) => {
        if (err || results.length === 0) return res.status(404).send('Song not found');

        const filepath = path.join(__dirname, '../public', results[0].filepath);
        const albumCoverPath = results[0].album_cover ? path.join(__dirname, '../public', results[0].album_cover) : null;

        fs.unlink(filepath, (err) => {
            if (err) return res.status(500).send('File deletion error');

            if (albumCoverPath) {
                fs.unlink(albumCoverPath, (err) => {
                    if (err) console.error(`Failed to delete album cover: ${err}`);
                });
            }

            const deleteQuery = 'DELETE FROM songs WHERE id = ?';
            db.query(deleteQuery, [songId], (err) => {
                if (err) return res.status(500).send('Database deletion error');
                res.redirect('/');
            });
        });
    });
};
