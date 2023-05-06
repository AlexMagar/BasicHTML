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
