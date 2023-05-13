// ======== Document Object Model (DOM) ======
// document.getElementById("demo").innerHTML = "DOM";

// const clk = clickMe(() => {
//   document.getElementById("demo").innerHTML = "DOM";
// });

// ===== challenge, print the 2nd element of both ul list  ====
/*
<ul>
<li>first</li>
<li>second</li>
</ul>
<ul>
<li>1st first</li>
<li>2nd second</li>
</ul>
*/
// Output:
// second
// 2nd second
const lst = document.querySelectorAll("ul > li:last-child");
//forEach loop
lst.forEach((num, i) => {
  console.log(num.innerHTML);
});

// for of loop
for (let item of lst) {
  console.log(item.innerHTML);
}

function clickMe() {
  return (document.getElementById("demo1").innerHTML = "inside the function");
}
// clickMe();

// ===== Event listener =====
// const ele = document.querySelector("#result");
// ele.addEventListener("click", () => {
//   //   console.log(ele.innerText);
//   ele.innerHTML = "Now the text is changed";
// });

// ========= onload =========
// function myFunction() {
//   console.log("Doc loaded");
// }

// ===== Event listener =====
const ele = document.querySelector("body");
ele.addEventListener("click", () => {
  //   console.log(ele.innerText);
  ele.innerHTML = "Now the text is changed";
});

//===== removeEventListener ======

// ========= JSON =======
{
  students: [
    { name: "Jack", age: 23 },
    { name: "Ram", age: 34 },
    { name: "Paul", age: 22 },
  ];
}
let studentsData =
  'students:[ { name: "Jack", age: 23 }, { name: "Ram", age: 34 }]';
console.log(JSON.parse(studentsData));
