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
// setTimeout(hello, 5000);

/*
// interval will run every 1 second,
let i = 0;
const interval = setInterval(() => {
  console.log("Inside the interval", i++);
  if (i == 5) {
    clearInterval(interval); //it clear interval if i equal to 10
  }
}, 1000);
*/

// ===== arrow function ======
const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
addTwoNumbers(4, 6);

// ==== return in arrow function
let addTwoNumber = (num1, num2) => num1 + num2;
console.log(addTwoNumber(4, 5));

// ======= loops =======
// ***** for loop *****
/*
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
*/
// ****** while loop
/*
let num = 1;
console.log("In the while loop");
while (num < 10) {
  console.log(num);
  num++;
}
*/

// ======= data manuplation ========
// safe number -2^53-1 to 2^53-1

// ****** string ******
// Escape character
// Length
// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, contact, trim
// toUpperCase, toLowerCase
// charAt, [], split
const str = 'Hi, "i\'m the" Owner of this Mac';
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[31]);
console.log(str.indexOf("o"));
// for (let i = 0; i <= str.length; i++) {
//   console.log(
//     str[i],
//     " index is ",
//     i,
//     " ",
//     i,
//     " index has character ",
//     str.charAt(i)
//   );
// }
// console.log(str.replace("i", "you"));
// console.log(str.replaceAll("i", "you"));
// console.log(str.substring(4, 6));
// console.log(str.substr());
// console.log(str.slice(3, 6));
// console.log(str.slice(-5));

// const val = str.includes("Owner");

// const val = str.charAt(1);
// const val = str.split("Owner");

// const val = str.search("Owner");
// console.log(" ham", val);

// template literals
const bio = (name, address) => {
  return `Today, we will learn about ${name}.
   well his name is ${name} and  he lives in ${address} and ${address} is his fav place`;
};

const sam = bio("Ram", "Brisbane");
console.log(sam);

// ======= Array[]  ========
// Length, push, pop, shift, unshift, toString, join, [], splice, slice, indexOf;
// Short, reverse;
// forEach, map;
// Filter, reduce, find, every;

const fruits = ["Orange", "Banana", "Graps", "Kiwi", "Passon Fruit"];
fruits.push("Apples"); // add at the last
fruits.unshift("Mango"); // add at the start

fruits.pop(); // pop from last
fruits.shift(); // remove from the first

// const data = fruits.slice(1, 4);
// const data = fruits.splice(1, 2, "papaya"); // muate the original array

//forEach do not return anything
fruits.forEach((item, index) => {
  console.log(index, item);
});

// map also return array which forEach cannot
// const newArg = fruits.map((item, index) => {
//     return index, item;
// });

//filter returns true, it will push item to varibale, return false ignores the push
// const newArg = fruits.filter((itms) => {
//   return itms.includes("P");
// });

// const newArg = fruits.find((itms) => itms.includes("P"));

// const newArg = fruits.includes((itms) => itms.includes("P"));

//truthy values "ram", 123, true, [], {}, ()=>{}
//falsy value "", 0, NaN, false, undefine,null

const banks = [12, 32345, 34254, 23, 23456, 32454, 45];
const totalMoney = banks.reduce((subtld, item) => {
  return subtld + item;
}, 0);
// console.log(data);
console.log("total sum of an array is ", totalMoney);
// console.log(fruits);

// ========= Object ======
const person = {
  name: "Ram",
  age: 22,
  address: "Sydney",
  gender: "male",
  father: "Rocky",
  mother: "sita",
};

/*
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

@param target — The target object to copy to.

@param source — The source object from which to copy properties.
*/
// const p2 = Object.assign({}, person);s

// const bio1 = (obj) => {
//   console.log("where i am", obj);
//   return `The person called ${obj.name} age ${obj.age} lives in ${ovj.address}`;
// };
// console.log(bio1);
// const p1 = Object.assign({}, person);
// const p2 = { ...person }; // spread
// const { name, ...rest } = person; // destructuring
// person.address = "Sydney";
// delete person.age;
// console.log(name, rest);
// console.log(person, p1, p2);

// Destructuring
// // default +
// Rest (... before the = it is rest)
// Spread (... after the = is spread)
// -> it combine the 2 object
// const obj1 = {
//   fname: "Ram",
//   address: "Sydney",
// };

// const obj2 = {
//   position: "CEO",
//   company: "Org",
// };

// const combo = { ...obj1, ...obj2 };
// console.log(combo);

// Date()
// Formate
// Get Methods
// Set Methods

// const date = Date();
// const date = Date.now(); //gives milli seconds
// const date = new Date("2023-02-20");
// date.setDate(date.getDate() + 5);
// const val01 = date.getDay();
// console.log(val01);

// challenge a function that takes food name and expire date and return like
// ---- if expired: xyz is expired
// ---- else xyz is not expired, you have 10 days to use this produce
// task: 1.create an object of a project with name and expire Date
// 2. write function to do the challange 1 solution and return the string
const foods = [
  {
    name: "Tuna",
    expire: "2023-05-05",
  },
  {
    name: "Milk",
    expire: "2023-05-15",
  },
];

const millADay = 1 * 24 * 60 * 60 * 1000;
const today = Date.now(); //time stamp

// console.log(today);
const checkExpire = ({ name, expire }) => {
  const expTs = new Date(expire).getTime();
  // console.log(expTs);
  if (today > expTs) {
    const diffDay = today - expTs;
    console.log(
      `${name} had expired by ${Math.floor(diffDay / millADay)} days`
    );
  } else {
    const diffDay = expTs - today;
    console.log(
      `${name} had not expired yet and you have ${Math.floor(
        diffDay / millADay
      )} days`
    );
  }
};

foods.forEach((item) => {
  checkExpire(item);
});

// ====== checking the JS run time =====
console.log("1. log");

setTimeout(() => {
  console.log("2. inside first set timeout");
}, 700);

console.log("3. after setTime out");

const sayHey = () => {
  console.log("4. inside sayHey");
};

setTimeout(() => {
  console.log("5. inside first set timeout");
}, 500);

sayHey();

console.log("6. last clg");
