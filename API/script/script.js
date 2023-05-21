// work flow
// 1. fetch user from API
// 2. store those user in global array
// 3. display user in the UI

let userList = [];

const apiEp = "https://randomuser.me/api/?";
const countElm = document.getElementById("count");
const displayElm = document.getElementById("list");

// function to fetch user from API
// const fetchUsers = () => {    //for promise
const fetchUsers = async (path = "results=10") => {
  //for async/wait
  //promise
  //   fetch(apiEp)
  //     .then((response) => {
  //       return response.json(); //convert into json
  //     })
  //     .then((data) => {
  //       userList = data.results;
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //async/wait -> have no try catch as promise so have put everything in try/catch block
  try {
    const response = await fetch(apiEp + path);
    const data = await response.json(); //convert into json
    userList = data.results; //json into data and store in list
    console.log(data.results);

    displaUser(userList); //call the function
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

const displaUser = (displayArg) => {
  let str = "";
  displayArg.forEach((usr) => {
    str += `  
    <div class="card" style="width: 18rem;">
    <img src="${usr?.picture?.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${usr?.name?.title} ${usr?.name?.first} ${usr?.name?.last}</h5>
      <div class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
      <a href="tel:${usr?.phone}"><div class="d-grid"><button class="btn btn-primary"> <i class="fa-solid fa-phone"></i> ${usr?.phone}</button></div></a>
      <div> <i class="fa-solid fa-envelope"></i> ${usr?.email}</div>
      <div> <i class="fa-solid fa-location-dot"></i> ${usr?.location?.city}, ${usr?.location?.state}, ${usr?.location?.country}</div>
    </div>
  </div>`;
  });
  displayElm.innerHTML = str;
  countElm.innerText = displayArg.length;
};

document.getElementById("select").addEventListener("change", (e) => {
  const { value } = e.target;
  const path = `results=10&gender=` + value;
  fetchUsers(path);
});

document.getElementById("search-input").addEventListener("keyup", (e) => {
  const { value } = e.target;
  console.log(value);

  //run filter method
  const filteredUser = userList.filter((item) => {
    console.log(item);
    const fullName = (item.name.first + " " + item.name.last).toLowerCase();

    return fullName.includes(value.toLowerCase());
  });
  displaUser(filteredUser);
});
