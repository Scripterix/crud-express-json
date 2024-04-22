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

      const selectStudent = document.createElement('td');
      selectStudent.innerHTML = `
       <a href="edit.html?id=${student.id}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
      </svg></a>`;
      selectStudent.addEventListener('click', () => {
        // Redirect to edit.html with the student's data
        const studentId = student.id;
        window.location.href = `edit.html?id=${studentId}`;
      });
      tr.appendChild(selectStudent);

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
      location.reload();

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
      setTimeout(() => {
        alertDanger.hidden = true;
      }, 5000);
    });
});



