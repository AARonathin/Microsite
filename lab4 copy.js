document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
  
    function updateCountdown() {
      const eventDate = new Date('June 23, 2025 18:00:00 GMT-7').getTime();
      const now = new Date().getTime();
      const timeDifference = eventDate - now;
  
      if (timeDifference <= 0) {
        countdownElement.textContent = "The event has started!";
        clearInterval(countdownInterval); // Stop updating once the event starts
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
  
    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call once immediately to show the countdown right away
  });
  
document.addEventListener('DOMContentLoaded', function() {
  var accordions = document.getElementsByClassName("accordion");

  for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

// Get the current date
const today = new Date();
// Format the date as YYYY-MM-DD
const formattedDate = today.toISOString().split('T')[0];



