document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formResponse').textContent = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});
