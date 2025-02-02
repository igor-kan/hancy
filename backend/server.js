const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets
app.use('/api/assets/audio', express.static(path.join(__dirname, 'assets/audio')));
app.use('/api/assets/tutorials', express.static(path.join(__dirname, 'assets/tutorials')));

// Routes
const recognizeRoute = require('./routes/recognize');
const characterRoute = require('./routes/character');

app.use('/api/recognize', recognizeRoute);
app.use('/api/character', characterRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
