// ===== varibale ======

// var, let, const
var name = "Laxman";
var lname = "Magar";
var age = 25;

console.log(name, lname, "age " + age);
// alert(name + " " + lname);

// ===== Js operators ====
// **** Arithmetic ****
// + Addition
// - subtraction
// * multiplication
// ** exponentiation (ES2016)
// / Division
// % Modulus (Division Remainder)
// ++ Increment
// -- Decrement

// **** comparision ****
// == result is always true or flase eg, 5 == "5" gives true which does not check data type
// === checks data tyoes eg, 5 === "5" gives false
// >, >=
// <, <=

// **** logical operators *****
// && -> AND
// || -> OR
// ! -> NOT

// ====== Data types =====
// ***** Data Types ****
// Primitives
// String -> "name"
// Number ->  1232
// Boolean -> true or false
// undefined -> not defined in system
// null

// **** Reference Types ======
// Object -> {key:"value"}
// Array -> ["data", 1223]
// Function ->function()
// Es6

//function
function add(a, b) {
  return (sum = a + b);
}

console.log(add(2, 3));

console.log(typeof Math.floor(5.4));

// ==== conditional statement ====
let a = 5;
if (a == 5) {
  console.log("Inside of if");
} else if (a == 4) {
  console.log("Inside of else if");
} else {
  console.lof("Inside of else");
}

// ===== switch case =====
// let day = prompt("What day do is today");
let day = "Sunday";
switch (day) {
  case "Sunday":
    console.log("Today is " + day);
    break;
  case "Monday":
    console.log("Today is " + day);
    break;
  case "Tuesday":
    console.log("Today is " + day);
    break;
  case "Wednesday":
    console.log("Today is " + day);
    break;
  case "Thursday":
    console.log("Today is " + day);
    break;
  case "Friday":
    console.log("Today is " + day);
    break;
  case "Saturday":
    console.log("Today is " + day);
    break;
  default:
    console.log("There is no such day in calendar");
    break;
}

// ===== Error handling ====
try {
  const num = 4;
  num = 5;
  console.log(nmu);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("I in side the finally");
}

// ==== js-scheduling ======
function hello() {
  console.log("Hello World!!!");
}

//this function is executed after 5000ms or any given time
setTimeout(hello, 5000);

// interval will run every 1 second,
let i = 0;
const interval = setInterval(() => {
  console.log("Inside the interval", i++);
  if (i == 5) {
    clearInterval(interval); //it clear interval if i equal to 10
  }
}, 1000);

// ===== arrow function ======
const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
addTwoNumbers(4, 6);

// ==== return in arrow function
let addTwoNumber = (num1, num2) => num1 + num2;
console.log(addTwoNumber(4, 5));

// ======= loops =======
// ***** for loop *****
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// ****** while loop
let num = 1;
console.log("In the while loop");
while (num < 10) {
  console.log(num);
  num++;
}

// ======= data manuplation ========
// safe number -2^53-1 to 2^53-1
