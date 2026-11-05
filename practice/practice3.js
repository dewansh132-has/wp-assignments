let students=JSON.parse(localStorage.getItem("students")) || []
render(students)
function submit(){
    let name=document.getElementById("name").value
    let classs=document.getElementById("class").value //class is a reserved keyword, so use classs
    let roll=document.getElementById("roll").value
    if(name.length<2) return
    if(classs==="") return
    if(roll==="") return
    let i=students.findIndex(s=>s.roll===roll)
    if(i!==-1) return
    students.push({name,classs,roll})
    //save to local storage
    localStorage.setItem("students",JSON.stringify(students))
    render(students)
}
function render(list){
    let rows=list.map((s,i)=>`
    <tr>
        <td>${i+1}</td>
        <td>${s.name}</td>
        <td>${s.classs}</td>
        <td>${s.roll}</td>
    </tr>
    `).join("");
    document.getElementById("table").innerHTML=rows
}
