let students=JSON.parse(localStorage.getItem("students")) || []; 
let editRoll=null;
//function to add student
function addStudent(){
    let name=document.getElementById("name").value.trim();
    let roll=document.getElementById("roll").value.trim();
    let email=document.getElementById("email").value.trim();
    let course=document.getElementById("course").value.trim();
    let marks=Number(document.getElementById("marks").value); //without number, marks will be taken as string
    //clear preview errors
    document.getElementById("nameErr").textContent="";
    document.getElementById("rollErr").textContent="";
    document.getElementById("emailErr").textContent="";
    document.getElementById("courseErr").textContent="";
    document.getElementById("marksErr").textContent="";
    //checking edge cases
    let hasError=false;
    if(name.length<2){
        document.getElementById("nameErr").textContent="Name can't be less than 2 characters";
        hasError=true;
    }
    if(roll===""){
        document.getElementById("rollErr").textContent="Roll No. can't be empty";
        hasError=true;
    }
    if(students.some(s=>s.roll===roll)){
        // document.getElementById("rollErr").textContent="Roll No. already exists";
        hasError=true;
    } //if the roll no. already exist then return
    if(email.length<2){
        document.getElementById("emailErr").textContent="Email can't be less than 2 characters";
        hasError=true;
    }
    if(course.length<2){
        document.getElementById("courseErr").textContent="Course name can't be less than 2 characters";
        hasError=true;
    }
    if(isNaN(marks) || marks<0 || marks>100){
        document.getElementById("marksErr").textContent="Marks must be (0-100)";
        hasError=true;
    }
    if(hasError) return;
    //all edge cases passed so push into the array
    if(editRoll){
        //update
        let i=students.findIndex(s=>s.roll===editRoll);
        students[i]={name,roll,email,course,marks};
        editRoll=null;
    }
    else{
        if(students.some(s=>s.roll===roll)) return;
        students.push({name,roll,email,course,marks});
    }
    render(students); //rebuilds the table HTML from beginning
    localStorage.setItem("students",JSON.stringify(students));
}
function render(list){
    let rows=list.map((s,i)=>`
    <tr>
    <td>${i+1}</td>
    <td>${s.name}</td>
    <td>${s.roll}</td>
    <td>${s.email}</td>
    <td>${s.course}</td>
    <td>${s.marks}</td>
    <td><button onclick="editStudent('${s.roll}')">Edit</button>/<button onclick="deleteStudent('${s.roll}')">Delete</button></td>
    </tr>
    `).join("");
    document.getElementById("table").innerHTML=rows;
}
//function to delete student
function deleteStudent(roll){
    let i=students.findIndex(s=>s.roll===roll);
    if(i!==-1) students.splice(i,1); //splice(start index,delete count)
    localStorage.setItem("students",JSON.stringify(students));
    render(students);
}
//function to edit student
function editStudent(roll){
    editRoll=roll;
    let student=students.find(s=>s.roll===roll);
    document.getElementById("name").value=student.name;
    document.getElementById("roll").value=student.roll;
    document.getElementById("email").value=student.email;
    document.getElementById("course").value=student.course;
    document.getElementById("marks").value=student.marks;
}
//function for searching
function search(){
    let x=document.getElementById("search1").value.trim();
    render(students.filter(s=>s.roll===x || s.name===x));
}
render(students);