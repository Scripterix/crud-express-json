// Fetch the student data from the API
const form = document.querySelector('#studentForm');
const studentName = document.querySelector('#name');
const studentGrade = document.querySelector('#grade');
const studentAge = document.querySelector('#age');
const submitButton = document.querySelector('#submit');
const alertSuccess = document.querySelector('#alertSuccess');
const alertDanger = document.querySelector('#alertDanger');

fetch('/api/students')
  .then(response => response.json())
  .then(data => {
    // Get the table body to insert the student data into
    const tableBody = document.querySelector('#student-table tbody');

    // Loop over each student in the data
    for (const student of data) {
      // Create a new table row for the student
      const tr = document.createElement('tr');

      // Create table data for each piece of student data
      const nameTd = document.createElement('td');
      nameTd.textContent = student.name;
      tr.appendChild(nameTd);

      const gradeTd = document.createElement('td');
      gradeTd.textContent = student.grade;
      tr.appendChild(gradeTd);

      const ageTd = document.createElement('td');
      ageTd.textContent = student.age;
      tr.appendChild(ageTd);

      // Append the table row to the table body
      tableBody.appendChild(tr);
    }
  });

// Function to add a new student
form.addEventListener('submit', (event) => {
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the values of the input fields
  const name = studentName.value;
  const grade = studentGrade.value;
  const age = studentAge.value;

  // Create a new student object
  const newStudent = {
    name: name,
    grade: grade,
    age: age
  };

  // Send a POST request to the API with the new student's data
  fetch('/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newStudent),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Log the response from the API
      console.log('Success:', data);

      // Show the success alert
      alertSuccess.hidden = false;

      // Add the new student to the table
      const tableBody = document.querySelector('#student-table tbody');
      const tr = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = data.name;
      tr.appendChild(nameTd);

      const gradeTd = document.createElement('td');
      gradeTd.textContent = data.grade;
      tr.appendChild(gradeTd);

      const ageTd = document.createElement('td');
      ageTd.textContent = data.age;
      tr.appendChild(ageTd);

      tableBody.appendChild(tr);

      // Clear the form fields
      studentName.value = '';
      studentGrade.value = '';
      studentAge.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);

      // Show the danger alert
      alertDanger.hidden = false;
    });
});

// Reload the page when the success alert is dismissed
alertSuccess.querySelector('.btn-close').addEventListener('click', () => {
  location.reload();
});

// Reload the page when the danger alert is dismissed
alertDanger.querySelector('.btn-close').addEventListener('click', () => {
  location.reload();
});