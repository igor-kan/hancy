const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataFilePath = path.join(__dirname, '../data/characters.json');

// Helper function to read dictionary data from the JSON file.
function readCharacterData() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

// GET /api/character/:char – returns detailed data for the character.
router.get('/:char', (req, res) => {
  const char = req.params.char;
  const characters = readCharacterData();
  if (characters[char]) {
    res.json({ character: characters[char] });
  } else {
    res.status(404).json({ error: "Character not found" });
  }
});

module.exports = router;
