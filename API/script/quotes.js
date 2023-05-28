let quotesList = [];
const dataElm = "https://type.fit/api/quotes/?";
const displayDat = document.getElementById("quotes");
const countElm = document.getElementById("count");
const getAuthor = document.getElementById("floatingSelect")
console.log("give me author: ",getAuthor);

const fetchData = async (path = "&author=Yogi-Berra") => {
  //   fetch(data)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data[0].text);
  //     });
  try {
    const response = await fetch(dataElm + path);
    console.log("Fetched Data: ", response);
    const data = await response.json();
    quotesList = data;
    // use map() after this to dispaly data 
    console.log("Parse json: ",quotesList);
    
    
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
    <option value=${ele?.author}>${ele?.author}</option>
    `;
  });
  displayDat.innerHTML = str;
  getAuthor.innerHTML = showAuthor;
  countElm.innerText = displayArg.length;
};

//change the content according to author selection
document.getElementById("floatingSelect").addEventListener("change", (event) =>{
  const {value} = event.target;
  console.log("what is comming in path: ", value)
  // const path = `&author=` + value;
  const path = `&author=Yogi Berra`;
  console.log("what is here: ", path);
  fetchData(path);
});


//search the quotes using keywords
//user enter value will be converted into lowerCase and also the quotes 
//add eventListiner and listen when user release key
document.getElementById("searchQuotes").addEventListener("keyup", (event) =>{
  const {value} = event.target; //store into value
  console.log("whatever user input in textfield comes here: ", value);

  //run through the array
  const filteredQuotes = quotesList.filter((item) =>{
    console.log("wtf: ", item.text)
    //get the quotes(text) and intoLowercase
    const qts =  (item.text).toLowerCase();
    return qts.includes(value.toLowerCase());
  });
  displayData(filteredQuotes);
});