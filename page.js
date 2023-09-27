// Get references to the button and the body element
const modeToggleBtn = document.querySelector('button')
const body = document.body

// Function to toggle between light and dark modes
function toggleMode() {
  body.classList.toggle("dark") // Toggle the "dark" class on the body
  if (body.classList.contains("dark")) {
    // If in dark mode, change the button label to ☀️
    modeToggleBtn.textContent = "☀️"
  } else {
    // If in light mode, change the button label to 🌙
    modeToggleBtn.textContent = "🌙"
  }
}

// Add a click event listener to the button
modeToggleBtn.addEventListener("click", toggleMode)