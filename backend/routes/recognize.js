const express = require('express');
const router = express.Router();

// Dummy recognition: always return a fixed candidate list.
router.post('/', (req, res) => {
  const { method, data } = req.body;
  console.log('Received recognition request:', method, data);
  // Here you would process “data” based on the input method.
  const candidates = ["漢", "字", "語"];
  res.json({ candidates });
});

module.exports = router;
