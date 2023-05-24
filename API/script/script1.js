// ========= workflow ========
// fetch the API data
let userList = [];
const apiEp = "http://api.open-notify.org/astros.json/";
const displayElm = document.getElementById("list");
console.log(fetch(apiEp));
// async/wait
const fetchUsers = async () => {
  try {
    const response = await fetch(apiEp);

    console.log("response", response);
    const data = await response.json();
    console.log("Data ", data);
    userList = data.people;
    console.log("UserList ", userList);
    displaUser(userList);
  } catch (error) {
    console.log("Something went wrong ", error);
  }
};

fetchUsers();

// ISS location and people in space
const displaUser = (displayArg) => {
  let str = "";
  console.log("what is in display Args: ", displayArg, " ", str);
  displayArg.forEach((usr) => {
    str += `
    <table class="table table-dark table-striped">
    <thead>
    <tr>
    <th>Name</th>
    <th>Aircraft</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th>${usr?.name}</th>
    <th>${usr?.craft}</th>
    </tr>
    </tbody>
    </table>
       `;
  });
  displayElm.innerHTML = str;
  console.log("String", str);
};
