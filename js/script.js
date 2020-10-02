/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotesArray = [
  {
    quote:"Sorry Goose, but it's time to buzz the tower.",
    author:'Maverick',
    citation:'TOP GUN',
    year:'1986'
  },
  {
    quote:'Have you ever danced with the devil by the pale moonlight?',
    author:'The Joker',
    citation:'BATMAN ',
    year:'1989'
  },
  {
    quote:'Roads? Where we’re going we don’t need roads.',
    author:'Doc Emmett Brown',
    citation:'Back To The Future',
    year:'1985'
  },
  {
    quote:'test quotation 4',
    author:'author 4',
    citation:'source 4',
    year:'year 4'
  },
  {
    quote:'test quotation 5',
    author:'author 5',
    citation:'source 5',
    year:'year 5'
  },
];

// usedQuotes array is declared, this array will be used to store quotes following display
// in body of page, and will be reset to empty when the quotesArray array becomes length = 0

const usedQuotes = [];

// randValue function returns random number between zero and upper limit supplied
// as argument to the function, returns value to main as randomValue

function randValue (upper) {
  let randomValue = (Math.floor(Math.random() * upper))
  return randomValue
};

// getRandomQuote function assigns quote index to be selected using randomValue function,
// assigns quote selected to quote var, quote seleced is pushed into usedQuotes array, and spliced from
// quotesArray each time the function is executed.  if quotesArray.length = 0, usedQuotes' values are pushed into
// quotesArray, and usedQuotes' values are spliced and not returned, emptying the array for reuse.

function getRandomQuote() {

  const quoteIndexVal = randValue(quotesArray.length);
  console.log(`quotes index val = ${quoteIndexVal}`)
  const quote = quotesArray[quoteIndexVal];
  usedQuotes.push(quote);
  quotesArray.splice(quoteIndexVal, 1);
  // console.log(`used quotes array length = ${usedQuotes.length}`);
  // console.log(`fresh quotes array length = ${quotesArray.length}`);
  if (quotesArray.length == 0) {
    quotesArray.push(...usedQuotes);
    usedQuotes.splice(0, usedQuotes.length)
  } 

  return quote;
};

// rgbReturn function creates a properly formatted rgb value using output from 
// randValue function being passed upper limit argument of 256, returns rgb to main
// body element is selected in printQuote function with background color set to rgb

function rgbReturn () {
  let rgb = `rgb(${randValue(256)}, ${randValue(256)}, ${randValue(256)})`;
  // console.log(rgb);
  return rgb;
}

// printQuote function accepts quote from getRandomQuote, assigns each value (if present)
// to a const, html is built using template literals with quote components and assigned to
// html variable and returned to main

function printQuote() {
  const selectedQuote = getRandomQuote();
  const quote = selectedQuote.quote;
  const source = selectedQuote.author;
  const citation = selectedQuote.citation;
  const pubYear = selectedQuote.year;

  let html = `<p class = "quote"> ${quote} </p>
                <p class = "source"> ${source} </p>`;

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

// window.setInterval method will re-execute printquote function every 5000ms
// refreshing oage window. new quote from quotesArray

window.setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);