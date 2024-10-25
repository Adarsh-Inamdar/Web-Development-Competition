// script.js

// Countdown Timer
const eventDate = new Date("2024-12-01T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Event has started!";
  }
}

setInterval(updateCountdown, 1000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Popup functionality
const openPopup = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

openPopup.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

// script.js

// document.getElementById('registration-form').addEventListener('submit', async (e) => {
//   e.preventDefault();
  
//   // Get form data
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const ticketType = document.getElementById('ticket-type').value;

//   // Send data to server
//   const response = await fetch('/register', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, email, ticketType })
//   });

//   const result = await response.json();
//   alert(result.message);
  
//   // Close the popup after submission
//   document.getElementById("popup").style.display = "none";
// });
