let students = []
function addStudent() {
    let name = document.getElementById("name").value.trim()
    let roll = document.getElementById("roll").value.trim()
    let score = Number(document.getElementById("score").value)
    if (name.length < 2) return
    if (roll === "") return
    if (score < 0 || score > 100 || isNaN(score)) return
    if(students.some(s=>s.roll===roll)) return //if the given roll no. already exists inside of the array, return
    students.push({ name, roll, score })
    render(students)
}
function deleteStudent(roll) {
    let i = students.findIndex(s => s.roll === roll)
    if (i !== -1) students.splice(i, 1)
    render(students)
}
function render(list) {
    let rows = list.map((s, i) => `
<tr>
<td>${i + 1}</td>
<td>${s.roll}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${s.score >= 60 ? "Pass" : "Fail"}</td>
<td><button onclick="deleteStudent('${s.roll}')">Delete</button></td>
</tr>
`).join("")
    document.getElementById("table").innerHTML = rows
    document.getElementById("total").textContent = students.length
    let total = students.reduce((sum, s) => sum + s.score, 0)
    let avg = students.length ? (total / students.length).toFixed(2) : 0
    document.getElementById("avg").textContent = avg
    let passCount = students.filter(s => s.score >= 60).length
    let percent = students.length ? ((passCount / students.length) * 100).toFixed(2) : 0
    document.getElementById("pass").textContent = percent
}
function sortHigh() {
    students.sort((a, b) => b.score - a.score)
    render(students)
}
function sortLow() {
    students.sort((a, b) => a.score - b.score)
    render(students)
}
function showFail() {
    render(students.filter(s => s.score < 60))
}
function showAll() {
    render(students)
}
function clearAll() {
    students = []
    render(students)
}
