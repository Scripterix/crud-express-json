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

// API endpoint to add a new student
app.post('/api/students', (req, res) => {
  // Get the new student data from the request body
  const newStudent = req.body;

  // Add a unique id to the new student
  newStudent.id = uuidv4();

  // Add the new student to the data
  data.students.push(newStudent);

  // Write the updated data back to the logbook.json file
  fs.writeFileSync(path.join(__dirname, 'logbook.json'), JSON.stringify(data, null, 2));

  // Send the new student data back as the response
  res.json(newStudent);
});

app.listen(3000);
console.log('Listening on port 3000');

