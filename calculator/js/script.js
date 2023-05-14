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

// 1. grab all the buttons first
const btnValue = document.querySelectorAll("div>.btn");

// 2. grab the display element
const displayEle = document.querySelector(".result");
console.log("result ", displayEle.innerText);

let stringToDisplay = "";

const operatorsVar = ["%", "/", "*", "-", "+", "="];

// 3. loop through all the buttons
btnValue.forEach((num, i) => {
  // console.log("button: ", num.innerText);

  // 4. add click event listner to the button
  num.addEventListener("click", () => {
    let clickBtnValue = num.innerText;
    // console.log("Ola!!! inside the event listiner ", clickBtnValue);

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
      console.log("inside the  operators value");
    }
    // 5. get the content of the button and check what button is being pressed
    stringToDisplay += clickBtnValue;
    console.log("string to Display: ", stringToDisplay);
    displayResult(stringToDisplay);
  });
});
// console.log(btnValue);

// 10. create a function that handles the display of the element on screen
const displayResult = (value) => {
  displayEle.innerText = value || "0.00";
};

// myArr.addEventListener("click", () => {
//   //   console.log(ele.innerText);
//   myArr.innerHTML = "Now the text is changed";

//   lst.forEach((num, i) => {
//     console.log(num.innerText);
//   });
// });
