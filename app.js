// app.js

// Example: Handle login form submission
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      // TODO: Call backend auth API and handle response
      console.log("Logging in", email);
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      // TODO: Call backend registration API
      alert("Registration successful!");
      window.location.href = "index.html";
    });
  }

  // TODO: Initialize AI image/text widgets on other pages
});
