const quotesList = document.getElementById("quotesList");
const quoteNumber = 25;

function insertQuote(index) {
  let quote = document.createElement("li");

  quote.innerHTML = `
    <p class="quote-text">${quotes[index].quoteText}</p>
    <p class="quote-author">${quotes[index].quoteAuthor}</p>
    `;

  quotesList.append(quote);
}

for (let i = 0; i < 25; i++) {
  insertQuote(i);
}

document.addEventListener("DOMContentLoaded", () => {
  alert("The content of DOM is loaded");
});

window.addEventListener("scroll", () => {
  let windowRelative = document.documentElement.getBoundingClientRect().bottom;

  if (windowRelative < document.documentElement.clientHeight + 100) {
    if (quoteNumber < quotes.length) {
      insertQuote(quoteNumber);
    }
  }
});
