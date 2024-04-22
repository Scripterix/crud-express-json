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
  data.students.unshift(newStudent);

  // Write the updated data back to the logbook.json file
  fs.writeFileSync(path.join(__dirname, 'logbook.json'), JSON.stringify(data, null, 2));

  // Send the new student data back as the response
  res.json(newStudent);
});


// API endpoint to get a student by ID
app.get('/api/students/:id', (req, res) => {
  // Find the student in the data
  const student = data.students.find(s => s.id === req.params.id);
  
  if (student) {
    // Send the student data back as the response
    res.json(student);
  } else {
    // If the student does not exist, send a 404 error
    res.status(404).json({ error: 'Student not found' });
  }
});

app.put('/api/students/:id', (req, res) => {
  // Find the student in the data
  const studentIndex = data.students.findIndex(s => s.id === req.params.id);
  if (studentIndex !== -1) {
    // Update the student data
    data.students[studentIndex] = req.body;

    console.log(studentIndex, req.body);

    // Write the updated data back to the logbook.json file
    fs.writeFileSync(path.join(__dirname, 'logbook.json'), JSON.stringify(data, null, 2));

    // Send the updated student data back as the response
    res.json(data.students[studentIndex]);
  } else {
    res.status(404).send('Student not found');
  }
});
app.delete('/api/students/:id', (req, res) => {
  const studentIndex = data.students.findIndex(s => s.id === req.params.id);
  if (studentIndex !== -1) {
    // Remove the student from the data
    data.students.splice(studentIndex, 1);

    // Write the updated data back to the logbook.json file
    fs.writeFileSync(path.join(__dirname, 'logbook.json'), JSON.stringify(data, null, 2));

    // Send a success response
    res.json({ message: `Deleted student with ID ${req.params.id}` });
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(3000);
console.log('Listening on port 3000');

