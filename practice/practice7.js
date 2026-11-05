let answers=["A","C","B"];
function validate1(x){
    document.getElementById("first").innerHTML=answers[0]===x ? "correct" : "incorrect";
}
function validate2(x){
    document.getElementById("sec").innerHTML=answers[1]===x ? "correct" : "incorrect";
}
function validate3(x){
    document.getElementById("third").innerHTML=answers[2]===x ? "correct" : "incorrect";
}