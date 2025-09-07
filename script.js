// ================================
// Part 1: Event Handling Example
// ================================
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "🎉 You clicked the button!";
});

// ================================
// Part 2a: Light/Dark Mode Toggle
// ================================
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ================================
// Part 2b: Counter Game
// ================================
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ================================
// Part 3: Form Validation
// ================================
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "✅ Registration successful!";
    document.getElementById("signupForm").reset();
  }
});
