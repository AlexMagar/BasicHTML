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

// filter, reduce, includes
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// Returns the elements of an array that meet the condition specified in a callback function.
const material = materials.filter((mat) => mat.length > 6);

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

document.getElementById("result").innerHTML = material;
