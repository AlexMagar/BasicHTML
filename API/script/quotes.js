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
    const response = await fetch(dataElm);
    console.log("Fetched Data: ", response);
    const data = await response.json();
    // quotesList = data;
    // use map() after this to dispaly data 
    console.log("Parse json: ",data);
    
    
    // displayDat.innerText = (quotesList.map( item => item)[0])[0].text
    displayData(data);
  } catch (error) {
    console.log("Someting went wrong: ", error);
  }
};
fetchData();

const displayData = (displayArg) => {
  let count = 1;
  let str = "";
  displayArg.forEach((element) => {
    str += `
    <tr>
      <th>${count}</th>
      <th>${element?.text}</th>
      <th>${element?.author}</th>
    </tr>
    `;
    count++;
  });
  displayDat.innerHTML = str;
};
