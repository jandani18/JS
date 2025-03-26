  

  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Believe you can and you're halfway there."
  ];

  let currentQuoteIndex = 0;
  let countdownTime = 5; // seconds

  function showQuote() {
    document.getElementById('quote').textContent = quotes[currentQuoteIndex];
    let timeLeft = countdownTime; //5

    const timer = setInterval(() => {
      document.getElementById('timer').textContent = timeLeft + 's';   
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        showQuote();
      }
    }, 1000);
  }
  showQuote();
