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
let randomValue = (Math.floor(Math.random() * quotesArray.length))

function getRandomQuote() {
  if (quotesArray.length > 0) {
    let quote = quotesArray.pop(randomValue);
    usedQuotes.push(quote);
    return quote;
  } else {
    console.log(usedQuotes);
  }
    
    
};



function printQuote() {
  const selectedQuote = getRandomQuote();
  const quote = selectedQuote.quote;
  const source = selectedQuote.author;
  const citation = selectedQuote.citation;
  const pubYear = selectedQuote.year;

  const html = `<p class = "quote"> ${quote} </p>
                <p> <span class = "source"> ${source}  </p>
                <p> <span class = "citation"> ${citation}  </p>
                <p> <span class = "year"> ${pubYear}  </p>`;
  
  document.getElementById('quote-box').innerHTML = html;
};

printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);