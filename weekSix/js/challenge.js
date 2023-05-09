/*challenge 
1. Create an array of 50 random number range between 1 and 100 programmativally;
2. sort the array in descending order
3. get the total value of the array
4. divide original array into 2 array that contains even number or odd numbers only
5. remove the duplicate number from the original array

challenge 2
create unique of 50 number range between 1 to 100 programmatically 
*/

// const arg = new Array(50);
let randNumArr = [];
let randEvenArr = [];
let randOddArr = [];

// generate 50 unique random nunber and push into array
function generateRandNum() {
  while (randNumArr.length < 50) {
    const cnt = Math.ceil(Math.random() * 100);
    if (randNumArr.indexOf(cnt) === -1) {
      randNumArr.push(cnt);
    }
  }
}

generateRandNum();
console.log("50 different unique random number ", randNumArr);

// Descending array
let ArrDes = randNumArr.sort((a, b) => b - a);

console.log("50 different Descending random number ", ArrDes);

// total of array
function total() {
  let sum = 0;
  randNumArr.forEach((items) => {
    sum += items;
  });
  return sum;
}
console.log("Total sum of the Array is ", total());

// divide two array into odd and even
function getOddEven() {
  for (let i = 1; i <= randNumArr.length; i++) {
    if (randNumArr[i] % 2 == 0) {
      randEvenArr.push(randNumArr[i]);
    } else {
      randOddArr.push(randNumArr[i]);
    }
  }
}

getOddEven();

console.log("Odd array\n", randOddArr);
console.log("Even arrar\n", randEvenArr);

// ======== better way =======
const arg = new Array(50) //create a new empty array of length 50
  .fill("") //fill an array
  .map(() => Math.ceil(Math.random() * 100)) //map return the value
  .sort(); //sorts the output
console.log("50 random array: ", arg);
// ===== sort array ===
arg.sort((a, b) => b - a);
console.log("Decs array: ", arg);

// ========== total ========
const totl = arg.reduce((subttl, num) => subttl + num, 0);
console.log("Total sum of array: ", totl);

// ====== divide array into odd and even ====
const odd = arg.filter((num) => num % 2 === 1);
console.log("Odd array: ", odd);

const even = arg.filter((num) => num % 2 === 0);
console.log("Even array: ", even);

// ====== duplicate remove =======
const uniqueArg = [];
arg.forEach((num, i) => {
  if (uniqueArg.includes(num)) {
    uniqueArg.push(num);
  }
  if (i === arg.indexOf(num)) {
    uniqueArg.push(num);
  }
});

const newArg = [...new Set(arg)];

console.log("Remove duplicate number from the array ", newArg);
