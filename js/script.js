/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotesArray = [
  {
    quote:'test quotation 1',
    author:'author 1',
    citation:'source 1',
    year:'year 1'
  },
  {
    quote:'test quotation 2',
    author:'author 2',
    citation:'source ',
    year:'year 2'
  },
  {
    quote:'test quotation 3',
    author:'author3 ',
    citation:'source 3',
    year:'year 3'
  },
  {
    quote:'test quotation 4',
    author:'author 4',
    citation:'source 4',
    year:'year 4'
  },
];

const usedQuotes = [];

function randValue (upper) {
  let randomValue = (Math.floor(Math.random() * upper))
  return randomValue
};

function getRandomQuote() {

  const quoteIndexVal = randValue(quotesArray.length);
  console.log(`quotes index val = ${quoteIndexVal}`)
  const quote = quotesArray[quoteIndexVal];
  usedQuotes.push(quote);
  quotesArray.splice(quoteIndexVal, 1);
  console.log(`used quotes array length = ${usedQuotes.length}`);
  console.log(`fresh quotes array length = ${quotesArray.length}`);
  

  return quote;
};



function rgbReturn () {
  let rgb = `rgb(${randValue(256)}, ${randValue(256)}, ${randValue(256)})`;
  // console.log(rgb);
  return rgb;
}


function printQuote() {
  const selectedQuote = getRandomQuote();
  const quote = selectedQuote.quote;
  const source = selectedQuote.author;
  const citation = selectedQuote.citation;
  const pubYear = selectedQuote.year;

  let html = `<p class = "quote"> ${quote} </p>
                <p class = "quote"> ${source} </p>`;

  if (selectedQuote.citation){
    html += `<p> <span class = "citation"> ${citation}  </p>`;
  };
  
  if (selectedQuote.year){
    html += `<p> <span class = "year"> ${pubYear}  </p>`;
  }

  document.getElementById('body').style.backgroundColor = rgbReturn();
  document.getElementById('quote-box').innerHTML = html;
};

printQuote();


window.setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);