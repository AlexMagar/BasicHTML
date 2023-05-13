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
