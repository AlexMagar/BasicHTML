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
  var cnt = 1;
  console.log("what is in display Args: ", displayArg, " ", str);
  displayArg.forEach((usr) => {
    str += `
    <tr>
    <th>${cnt}</th>
    <td>${usr?.name}</td>
    <td>${usr?.craft}</td>
    </tr>
       `;
    cnt++;
  });

  displayElm.innerHTML = str;
  console.log("String", str);
};
