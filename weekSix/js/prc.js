//To access an HTML element
document.getElementById("demo").innerHTML = "This is innerHTML";

// for testing purpose
// document.write() after the HTML doc is loaded, will delete all existing HTML
document.write("Hello there how are you");

// window.alert("Hello JS!!!");

function getIndex() {
  let txt = document.getElementById("heading").innerHTML;
  let index = txt.indexOf("world");
  document.getElementById("demo1").innerHTML = "The index of " + index;
}
