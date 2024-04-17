express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Read the logbook.json file and parse it as JSON
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'logbook.json'), 'utf-8'));

// API endpoint to get all students
app.get('/api/students', (req, res) => {
  res.json(data.students);
});



app.listen(3000);
console.log('Listening on port 3000');

