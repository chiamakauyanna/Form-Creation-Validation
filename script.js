// Start with DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function() {
// Form Selection
  const form = document.getElementById("registration-form");
  
// Feedback Division Selection
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener('submit', function(event){
        event.preventDefault()
 // Retrieve User Inputs
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Initialize Validation Variables
      let isValid = true;
      const messages = [];

      // Username Validation
      if (username.length < 3) {
        isValid = false;
        messages.push("Username is too short");
      }
      // Email Validation
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Invalid Email");
      }

      // Password Validation
      if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters");
      }

      // Feedback Display Logic
      feedbackDiv.style.display = "block";
      if (isValid === true) {
        feedbackDiv.textContent = "Registration successful!" ;
        feedbackDiv.style.color = "#28a745";
      } 
      else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545"
      } 
  })
});