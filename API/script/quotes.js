let quotesList = [];
const dataElm = "https://type.fit/api/quotes/";
const displayDat = document.getElementById("quotes");
console.log(fetch(dataElm));

const fetchData = async () => {
  //   fetch(data)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data[0].text);
  //     });
  try {
    const randNum = Math.ceil(Math.random() * 10000);
    console.log(randNum);
    const response = await fetch(dataElm);
    console.log("Fetched Data: ", response);
    const data = await response.json();
    quotesList = data;
    console.log("Parse json: ", quotesList);
    displayData(quotesList);
  } catch (error) {
    console.log("Someting went wrong: ", error);
  }
};
fetchData();

const displayData = (displayArg) => {
  let str = "";
  displayArg.forEach((element) => {
    str += `
    <p>${element?.author}</p>
    <p>${element?.text}</p>
`;
  });
  displayDat.innerHTML = str;
};
