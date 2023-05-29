let quotesList = [];
const dataElm = "https://type.fit/api/quotes/?";
const displayDat = document.getElementById("quotes");
const countElm = document.getElementById("count");
const getAuthor = document.getElementById("floatingSelect")
const getQuotesCardView = document.getElementById("cardView")
console.log("give me author: ",getAuthor);

const fetchData = async (path) => {
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
    // console.log("Parse json: ",quotesList);
    
    
    // displayDat.innerText = (quotesList.map( item => item)[0])[0].text
    displayData(quotesList);
  } catch (error) {
    console.log("Someting went wrong: ", error);
  }
};
fetchData();

const displayData = (displayArg) => {
  let count = 1;
  let str = "";
  let showAuthor = "";
  let cardQuotes = "";

  // displaying the quotes in card view
  // setInterval(() =>{ 
  //   displayArg.forEach((ele) =>{
  //     console.log("Hello i am inside setInterval");
  //     cardQuotes = `
  //     <p>${ele?.text}</p>
  //     <p class="text-end fst-italic">-${ele?.author}</p>
  //     `;
  //   })
  //   // console.log("hello");
  // });

  
  
  console.log("why is it not: ", cardQuotes);

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
  getQuotesCardView.innerHTML = cardQuotes;
  getAuthor.innerHTML = showAuthor;
  countElm.innerText = displayArg.length;
};

//change the content according to author selection
document.getElementById("floatingSelect").addEventListener("change", (event) =>{
  const {value} = event.target;
  console.log("what is comming in path:", value)
  const path = `&author=` + value;
  // const path = `&author=`;
  console.log("what is here: ", path);
  fetchData(path);
});


//search the quotes using keywords
//user enter value will be converted into lowerCase and also the quotes 
//add eventListiner and listen when user release key
document.getElementById("searchQuotes").addEventListener("keyup", (event) =>{
  const {value} = event.target; //store into value destructions
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