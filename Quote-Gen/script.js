let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "Tell Me, Whose value",
    person: "Malli",
  },
  {
    quote: "Tell Me, Whose value",
    person: "Arn",
  },

  {
    quote: ", Whose value",
    person: "Arn",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
