/*
1. grab all the buttons first
2. grab the display element
3. loop through all the buttons
4. add click event listner to the button
5. get the content of the button and check what button is being pressed
6. eg. if user pressed the AC button, clear the content of the display
7. Eg.if user pressed the DEL button, remove the last character from the display text
8. Tricky: to control the point and equals to operator
9. create a function that calculates the total value of the operation -> eval()
10. create a function that handles the display of the element on screen
*/

// variable;
// const myArr = new Array(() => {
//   document.getElementById("ac").innerHTML;
// });
// console.log(myArr[0]);
// const result = myArr.push(document.getElementById("result").innerHTML);
// console.log(result);

// function clearResult() {
//   const rslt = document.getElementById("result").innerHTML;
//   //   const rslt = myArr.push(document.getElementById("ac").innerHTML);
//   console.log("result not publish", rslt);
// }

// importing the audio File
const audioFile = new Audio("./assets/aa.wav");

// 1. grab all the buttons first
const btnValue = document.querySelectorAll("div>.btn");

// 2. grab the display element
const displayEle = document.querySelector(".result");
console.log("result ", displayEle.innerText);

let stringToDisplay = "";

let latestOperator = "";

const operatorsVar = ["%", "/", "*", "-", "+", "."];

// 3. loop through all the buttons
btnValue.forEach((num, i) => {
  // console.log("button: ", num.innerText);

  // 4. add click event listner to the button
  num.addEventListener("click", () => {
    let clickBtnValue = num.innerText;
    // console.log("Ola!!! inside the event listiner ", clickBtnValue);

    //limit the user from typing operators in the beginning
    if (operatorsVar.includes(clickBtnValue) && !stringToDisplay.length) {
      return;
    }

    // 6. eg. if user pressed the AC button, clear the content of the display
    if (clickBtnValue === "AC") {
      stringToDisplay = "";
      return displayResult(stringToDisplay);
    }

    // 7. Eg.if user pressed the DEL button, remove the last character from the display text
    if (clickBtnValue === "←") {
      stringToDisplay = stringToDisplay.slice(0, -1);
      return displayResult(stringToDisplay);
      // console.log("back button", stringToDisplay);
    }

    // 8. Tricky: to control the point and equals to operator
    if (operatorsVar.includes(clickBtnValue)) {
      // const lastCharacter = stringToDisplay.slice(0, -1);
      const lastCharacter = stringToDisplay.slice(-1);
      console.log("lastcharacter ", lastCharacter);

      if (operatorsVar.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
    }

    if (clickBtnValue === "=") {
      const lastCharacter = stringToDisplay.slice(-1);

      if (operatorsVar.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
      return displayTotal(stringToDisplay);
    }
    // 5. get the content of the button and check what button is being pressed
    stringToDisplay += clickBtnValue;
    console.log("string to Display: ", stringToDisplay);
    displayResult(stringToDisplay);

    // check for decimal in the number
    if (clickBtnValue === ".") {
      console.log("you are inside the decimal ");
      if (stringToDisplay.includes(".")) {
        console.log("double decimal id not vaild in a number");
        displayEle.style.background = "red";
        setTimeout(() => (displayEle.style.background = ""), 200);
        return;
      }
    }
  });
});
// console.log(btnValue);

// 10. create a function that handles the display of the element on screen
const displayResult = (value) => {
  displayEle.innerText = value || "0.00";
};

const displayTotal = (value) => {
  const prankedData = sendRandom();
  if (prankedData) {
    audioFile.play();
    displayEle.style.background = "red";
    setTimeout(() => (displayEle.style.background = ""), 2000);
  }
  console.log(prankedData);

  let totalValue = eval(value).toString();
  stringToDisplay = totalValue;
  displayResult(stringToDisplay);
};

const sendRandom = () => {
  let ranNum = Math.round(Math.random() * 10);
  console.log(ranNum);

  // if (ranNum < 3) {
  //   return ranNum;
  // } else {
  //   return 0;
  // }
  // tertiary operators
  return ranNum < 3 ? ranNum : 0;
};

// myArr.addEventListener("click", () => {
//   //   console.log(ele.innerText);
//   myArr.innerHTML = "Now the text is changed";

//   lst.forEach((num, i) => {
//     console.log(num.innerText);
//   });
// });

// HOMEWORK
/*
if (val === ".")
1. finds the last occurance of the last operator, 
This is done to handle cases where the decimal point is entered after an operator. 
             For example, if the expression is "5+4*", 
            the decimal point should be allowed after the "*", not after the "+".
2. SLICE THAT OUT 
3. check if lastNumberSet already includes a decimal point. 
If it does, it means that a decimal point has already been entered for the current number
use : lastNumberSet.includes(".") and return nothing
4. If there is no lastOperator (which means the expression doesn't have an operator yet) and 
   strToDisplay already includes a decimal point, it means that the decimal point has already 
   been entered for the first number in the expression.
5.  check if (!lastOperator && strToDisplay.includes(".")) then return 
*/
