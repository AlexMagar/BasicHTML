// ========= workflow ========
// fetch the API data
let userList = [];
const apiEp = "http://api.open-notify.org/astros.json/";
console.log(fetch(apiEp));
// async/wait
// debugger;
const fetchUsers = async() => {
    try {
        const response = await fetch(apiEp);
        console.log("response", response);
        const data = await response.json();
        console.log("Data ", data);
        userList = data.numbers;
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
    displayArg.forEach((usr) => {
        str += `
        <div>${people?.0?.name}</div>
        `;
    });
};