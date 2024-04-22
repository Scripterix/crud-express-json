document.addEventListener('DOMContentLoaded', () => {
  const btnDeleteStudent = document.getElementById('btnDeleteStudent');
  const btnAcceptUpdate = document.getElementById('btnAcceptUpdate');
  const alertSuccessUpdate = document.querySelector('#alertSuccessUpdate');
  const alertDangerUpdate = document.querySelector('#alertDangerUpdate');

  const idUpdate = document.getElementById('idUpdate');
  const nameUpdate = document.getElementById('nameUpdate');
  const gradeUpdate = document.getElementById('gradeUpdate');
  const ageUpdate = document.getElementById('ageUpdate');

  const studentId = new URLSearchParams(window.location.search).get('id');

  fetchStudentData(studentId);
  setupUpdateButton(studentId);
  setupDeleteButton(studentId);
});

function fetchStudentData(studentId) {
  fetch(`/api/students/${studentId}`)
    .then(response => response.json())
    .then(student => {
      idUpdate.value = student.id;
      nameUpdate.value = student.name;
      gradeUpdate.value = student.grade;
      ageUpdate.value = student.age;
    })
    .catch(console.error);
}

function setupUpdateButton(studentId) {
  btnAcceptUpdate.addEventListener('click', event => {
    event.preventDefault();

    const updatedData = {
      id: studentId,
      name: nameUpdate.value,
      grade: gradeUpdate.value,
      age: ageUpdate.value
    };

    fetch(`/api/students/${studentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alertSuccessUpdate.hidden = false; // Show the success alert
      setTimeout(() => {
        window.location.href = '/'; // Redirect to the home page
      }, 5000);
    })
    .catch(console.error);
  });
}

function setupDeleteButton(studentId) {
  btnDeleteStudent.addEventListener('click', event => {
    event.preventDefault();

    fetch(`/api/students/${studentId}`, { method: 'DELETE' })
    .then(() => {
      console.log(`Deleted student with ID ${studentId}`);
      alertDangerUpdate.hidden = false; 
      setTimeout(() => {
        window.location.href = '/'; // Redirect to the home page
      }, 5000);
    })
    .catch(console.error);
  });
}