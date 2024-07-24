// routes/songs.js
const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new song
router.post('/', async (req, res) => {
  const { title, artist, url } = req.body;

  try {
    const newSong = new Song({
      title,
      artist,
      url,
    });

    const savedSong = await newSong.save();
    res.json(savedSong);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
