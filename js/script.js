/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotesArray = [
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

console.log(quotesArray);
console.log(quotesArray.length);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const selectedNumber = Math.floor(Math.random() * quotesArray.length)+1;
  const quote = quotesArray[selectedNumber];
  return quote;
  
};

const selectedQuote = getRandomQuote();

console.log(selectedQuote);


/***
 * `printQuote` function
***/

function printQuote() {};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);