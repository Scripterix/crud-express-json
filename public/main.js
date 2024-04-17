// Fetch the student data from the API
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