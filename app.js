/* Variables */

let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person: "Benjamin Franklin"
  },
  {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    person: "Oprah Winfrey"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas Edison"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    person: "Albert Einstein"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    person: "Henry Ford"
  },
  {
    quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    person: "Albus Dumbledore (J.K. Rowling)"
  },
  {
    quote: "It always seems impossible until it’s done.",
    person: "Nelson Mandela"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    person: "Wayne Gretzky"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde"
  }
];

btn.addEventListener("click" , function(){
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})