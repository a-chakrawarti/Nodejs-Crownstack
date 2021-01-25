const students = [
    {name: 'Rahul', class: 3},
    {name: 'Vikas', class: 12}
]

function enrollStudent(student, callback) { 
    setTimeout(() => { // asynchronous
        students.push(student);
        console.log('Student has been enrolled!')
        callback();
    }, 2000) // 2 seconds
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(function(student) { // synchronous function
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Student data has been fetched!')
    }, 1000); // 1000 ms or 1 seconds
}

let newStudent = {name:'Krishna', class: 5}
enrollStudent(newStudent, getStudents);
// getStudents();