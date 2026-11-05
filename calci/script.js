let out='';
let ans = 0;
let currInp, prevInp;
let op = '';
function num(n) {
    prevInp = ans;
    currInp = n;
    out+=currInp.toString();
    document.getElementById('display').value='';
    document.getElementById('display').value = out;
    calculate();
}
function opr(op1) {
    op = op1;
    out+=op;
    document.getElementById('display').value='';
    document.getElementById('display').value = out;
    calculate();
}

function calculate() {
    switch (op) {
        case '+':
            let result=prevInp + currInp;
            ans += result;
            prevInp = ans;
            op = '';
            break;
        case '-':
            result=prevInp - currInp;
            ans += result;
            prevInp = ans;
            op = '';
            break;
        case '*':
            result=prevInp * currInp;
            ans += result;
            prevInp = ans;
            op = '';
            break;
        case '/':
            result=prevInp / currInp;
            ans += result;
            prevInp = ans;
            op = '';
            break;
        default:
            break;
    }
}
function equalTo(){
    document.getElementById('display').value=ans;
}
function clearr() {
    ans = 0;
    currInp, prevInp;
    op = '';
    out='';
    document.getElementById('display').value = '';
}
