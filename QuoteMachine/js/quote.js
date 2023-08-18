var colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", 
"#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D"];



$(document).ready(function() {
  // Fetching the quotes from API when the document is ready
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Store all the quotes
      window.quotes = data;

      // Get an initial quote when the page loads
      getQuote();
    });

  // Event listener for the "New Quote" button
  $('#new-quote').on('click', function() {
    getQuote();
    changeBackgroundColor();
  });
});

// Gets a new quote and updates the page
function getQuote() {
  if (window.quotes) {
    var quote = window.quotes[Math.floor(Math.random() * window.quotes.length)];
    
    // Remove "type.fit" from the author name
    var quoteAuthor = quote.author.replace(", type.fit", "").trim();

    $('#text').text(quote.text);
    $('#author').text(quoteAuthor);

    // Create the tweet link with the current quote and author
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote.text + '" ' + quoteAuthor);
    $('#tweet-quote').attr('href', tweetLink);
  } else {
    console.error("No quotes data available!");
  }
}



// Change the background color of the body
function changeBackgroundColor() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  $('body').css('backgroundColor', colors[colorIndex]);
}
  