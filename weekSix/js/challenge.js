/*challenge 
1. Create an array of 50 random number range between 1 and 100 programmativally;
2. sort the array in descending order
3. get the total value of the array
4. divide original array into 2 array that contains even number or odd numbers only
5. remove the duplicate number from the original array
*/

let randNumArr = [];
let randEvenArr = [];
let randOddArr = [];

// generate 50 unique random nunber and push into array
function generateRandNum() {
  while (randNumArr.length < 50) {
    const cnt = Math.ceil(Math.random(1, 100) * 100);
    if (randNumArr.indexOf(cnt) === -1) {
      randNumArr.push(cnt);
    }
  }
}

generateRandNum();
console.log(randNumArr);

// Descending array
let ArrDes = randNumArr.sort((a, b) => {
  return b - a;
});

console.log(ArrDes);

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
  for (let i = 0; i <= randNumArr.length; i++) {
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
