// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Select all sections and footer
const sections = document.querySelectorAll("section, footer");

// Function to show clicked section and hide others
function showSection(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.remove("hidden"); // Show this section
    } else {
      sec.classList.add("hidden");    // Hide all others
    }
  });
}

// Add click event listener to all nav links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute("href").substring(1); // Get section ID
    showSection(targetId); // Show the clicked section
  });
});

// Hide all sections except About on page load
window.addEventListener("DOMContentLoaded", () => {
  sections.forEach(sec => {
    if (sec.id !== "about") {
      sec.classList.add("hidden");
    }
  });
});