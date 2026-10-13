function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let result = document.getElementById("result");

    result.innerHTML = "Student Name: " + name +
                       "<br>Roll Number: " + roll;
}
