// ====== OOP =======

// literal
const a = {
  //properties
  name: "Ram",
  sing: () => (document.getElementById("demo").innerHTML = "Ram can sing"),
};

//constructor
const b = new Object();

// debugger;

const person = () => {
  const bio = () => {
    // const hell = () => {
    //   return "Hell";
    // };
    return "person has name";
  };
  return bio;
};

const per = person();
console.log(per());

// ====== class ======
class Fruit {
  constructor() {
    console.log("inside");
  }
  bio() {
    return "Has a height of and likes to sing";
  }
}

const obj = new Fruit();
console.log(obj.bio());

// this object
function ab() {
  console.log(this);
}

ab();

class veg {
  constructor(fruitName, fruitNumber) {
    this.fruitName = fruitName;
    this.fruitNumber = fruitNumber;
  }
  bio() {
    console.log(this.fruitNumber);
  }
}
const obj1 = new veg("Apple", 23);
console.log(obj1.bio());

//Encapsulation
// Abstraction
// Inheritance
// Polymorphism
