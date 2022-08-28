const loadQuotes =() => {
    fetch('https://api.kanye.rest/')
    .then(data => displayQuote(data));
}
const displayQuote = quote => {
    
   const blockQuote = document.getElementById('quote');
   console.log(quote)

   blockQuote.innerText= quote.quote;
}


