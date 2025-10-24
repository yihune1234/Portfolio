// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Select all sections in the main content
const sections = document.querySelectorAll("main section");

// Function to show the clicked section and hide others
function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = "block";  // Show clicked section
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    } else {
      section.style.display = "none";   // Hide others
    }
  });
}

// Initially show only the home section
sections.forEach(section => {
  if (section.id === "hero") section.style.display = "block";
  else section.style.display = "none";
});

// Add click event listener to each navbar link
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent page jump
    const targetId = link.getAttribute("href").substring(1); // Remove '#'
    showSection(targetId);
  });
});
