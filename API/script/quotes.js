let quotesList = [];
const dataElm = "https://type.fit/api/quotes/";
const displayDat = document.getElementById("quotes");
const countElm = document.getElementById("count");
const getAuthor = document.getElementById("floatingSelect")
console.log(getAuthor);

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
  let showAuthor = "";
  console.log("authors names ", ath)
  displayArg.forEach((element) => {
    str += `
    <tr>
      <td>${count}</td>
      <td>${element?.text}</td>
      <td>${element?.author}</td>
    </tr>
    `;
    count++;
  });

  displayArg.forEach((ele) =>{
    showAuthor +=`
    <option value=${count}>${ele?.author}</option>
    `;
  });
  displayDat.innerHTML = str;
  getAuthor.innerHTML = showAuthor;
  countElm.innerText = displayArg.length;
};
