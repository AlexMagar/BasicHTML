//get the element from the button click
// const btnVl = document.querySelector(".btn").addEventListener("click", () => {
//   document.querySelector(".itm1").innerHTML = "Hello there";
// });
// console.log(btnVl);

// btnVl.addEventListener("click", () => {
//   console.log("clicked");
// });

// if (btnVl === "+ Add New Task") {
//   console.log("inside the function");
// }

//reverse string
// const getString = document.querySelector(".h1").innerHTML;
// var reverseString = "";
// // console.log("Reverse:", getString);
// for (let i = getString.length - 1; i >= 0; i--) {
//   reverseString += getString[i];
// }
// console.log("Where are you:", reverseString);

let taskList = [];
const entryElm = document.getElementById("entry");
const badElm = document.getElementById("bad");
// ============= form handler ==========
// capture the data from the form on from submit
const handleOnSubmit = (e) => {
  const formDt = new FormData(e);
  const task = formDt.get("task");
  const hr = formDt.get("hr");
  const taskObj = {
    task,
    hr,
    id: randomGenerator(),
    type: "entry",
  };

  //store that data in array as obj
  taskList.push(taskObj);
  displayTask();
};

//displaying data in the browser
const displayTask = () => {
  const entryList = taskList.filter((item) => item.type === "entry");
  let str = "";
  taskList.map((item, i) => {
    str += ` <tr>
    <td>${item.task}</td>
    <td>${item.hr}hrs</td>
    <td>
        <button id="danger" class="btn btn-danger btn-sm" onClick="deleteTask('${item.id}')"><i class="fa-solid fa-trash"></i></button>
        <button id="go-left" class="btn btn-success btn-sm" onClick="switchTask('${item.id}','bad')"><i class="fa-solid fa-arrow-right"></i></button>
    </td>
</tr>
`;
  });

  entryElm.innerHTML = str;
  displayBadTask();
};

//displaying baddata in the browser
const displayBadTask = () => {
  const entryList = taskList.filter((item) => item.type === "bad");
  let str = "";
  taskList.map((item, i) => {
    str += ` <tr>
    <td>${item.task}</td>
    <td>${item.hr}hrs</td>
    <td>
        <button class="btn btn-warning btn-sm" onclick="switchTask('${item.id}','entry')"><i class="fa-solid fa-arrow-left"></i></button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask('${item.id}')"><i class="fa-solid fa-trash"></i></button>
    </td>
</tr>
`;
  });

  badElm.innerHTML = str;
};

//creating unique id
const randomGenerator = (length = 6) => {
  const collection = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  let str = "";
  for (let i = 0; i < length; i++) {
    const randNum = Math.round(Math.random() * collection.length - 1);
    str += collection[randNum];
  }
  return str;
};

//delete item from array absed on given id
const deleteTask = (id) => {
  if (window.confirm("are you sure")) {
    taskList = taskList.filter((item) => item.id !== id);
    displayTask();
  }
};

//switch task from entry to bad type or vv
const switchTask = (id, type) => {
  taskList = taskList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });
  displayTask();
};

//calculate haours
const countHours = (hr) => {
  console.log(taskObj.hr);
};
