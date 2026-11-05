//05-03-26

// let x = parseFloat(prompt("enter 1st no: "));
// let y = parseFloat(prompt("enter 2nd no: "));
// let op = prompt("enter operator (+ - * /): ");
// switch (op) {
//     case '+':
//         console.log(x + y);
//         break;
//     case '-':
//         console.log(x - y);
//         break;
//     case '*':
//         console.log(x * y);
//         break;
//     case '/':
//         console.log(x / y);
//         break;
//     default:
//         console.log("invalid operator");
//         break;
// }

// console.log(document);
// console.log(document.body.h1);
// var x=document.getElementById('heading');
// console.log(x);
// var i=document.getElementById('one');
// i.style.color="red";
// var y=i.parentElement;
// console.log(y.children);
// function printInput(){
//     let z=document.getElementById('two');
//     z.innerHTML="asdfghjkqwertyuiopzxcvbnm";
//     z.style.backgroundColor="blue";
//     z.style.color="yellow";
// }

//12-03-26

//in js objects are containers to store properties(key:value) and methods(key:function())
//obejct properties
const car={
    type:"suzuki",
    model:67,
    color:"red"
};
document.getElementById("demo1").innerHTML="the car model is :"+car.model;
//you can also create an empty object, and add the properties later
const person={};
person.name="drs...";
person.age=79;
person.roll=67;
person.race="saiyan";
document.getElementById("demo2").innerHTML=person.name+" is a "+person.race; 
//object methods
const per={
    first:"p",
    last:"dd",
    age:77,
    fullName: function(){
        return this.first+" "+this.last; //this refers to the object
    }
};
document.getElementById("demo3").innerHTML="person's name is: "+per.fullName();
//u can access the property using dot or bracket
document.getElementById("demo4").innerHTML=person.age;
document.getElementById("demo5").innerHTML=per["last"];
//u can change the property value
person.age=3700;
document.getElementById("demo6").innerHTML=person.age;
//adding a property
person.fav="one piece";
document.getElementById("demo7").innerHTML=person.fav;
//deleting a property
delete person.age;
//check if the property is present in the object
let res=("age" in person);
document.getElementById("demo8").innerHTML=res; //false
res=("name" in person);
document.getElementById("demo9").innerHTML=res; //true
//nested object
myObj={
    naam:"drs",
    age:67,
    myCars:{
     car1:"bmw",
     car2:"porche",
     car3:"lambo"    
    }
};
document.getElementById("demo10").innerHTML=myObj.myCars.car2;
let p1="myCars";
let p2="car1";
document.getElementById("demo11").innerHTML=myObj[p1][p2];