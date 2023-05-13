// ====== functional programming =====
// //Pure function
// const sayHello = (greeting) => {
//   return `${greeting} from Paul`;
// };
// console.log(sayHello("Hello There"));

// ---------------------------------------
// side effect
// let name = "Ram";
// const sayHello = (greeting) => {
//   return `${greeting} from ${name}`;
// };

// console.log(sayHello("Hello There"));

// -------------------------------------------
// Highre order function
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayHello() {
  console.log("Hello again");
}
greet("John", sayHello); //passing function as a argument

// -----------------------------------------------
// Recursion
let sum0 = 0;
let myArray = [4, 5];
const calcualteSum0 = () => {
  if (myArray.length) {
    sum0 += myArray.pop();
    calcualteSum0(myArray);
  }
  return sum0;
};

console.log(calcualteSum0());
// const totl = arg.reduce((subttl, num) => subttl + num, 0);
// console.log("Total sum of array: ", totl);
let sum = 0;
let myArr = [3, 6];
const calculateSum = myArr.reduce((sum, myArr) => sum + myArr, 0);
console.log(calculateSum);
