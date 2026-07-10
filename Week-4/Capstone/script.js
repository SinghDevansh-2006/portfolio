let students = JSON.parse(localStorage.getItem("students")) || [];

// Display students when page loads
displayStudents();

function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name == "" || age == "" || course == "") {
        alert("Please fill all fields!");
        return;
    }

    let student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    saveStudents();

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    let search = document.getElementById("search").value.toLowerCase();

    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        if (
            students[i].name.toLowerCase().includes(search) ||
            students[i].course.toLowerCase().includes(search)
        ) {

            table.innerHTML += `
            <tr>

                <td>${students[i].name}</td>

                <td>${students[i].age}</td>

                <td>${students[i].course}</td>

               <td>
                    <button class="edit-btn" onclick="editStudent(${i})">Edit</button>

                    <button class="delete-btn" onclick="deleteStudent(${i})">Delete</button>
                </td>

            </tr>
            `;
        }
    }

}

function deleteStudent(index) {

    students.splice(index, 1);

    saveStudents();

    displayStudents();

}

function editStudent(index) {

    document.getElementById("name").value = students[index].name;
    document.getElementById("age").value = students[index].age;
    document.getElementById("course").value = students[index].course;

    students.splice(index, 1);

    saveStudents();

    displayStudents();

}

function saveStudents() {

    localStorage.setItem("students", JSON.stringify(students));

}