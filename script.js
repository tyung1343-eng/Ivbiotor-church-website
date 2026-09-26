const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Demo message form
document.getElementById("messageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "Thank you! Your message has been received.";

  this.reset();
});
