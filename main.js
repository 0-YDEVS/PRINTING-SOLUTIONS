// Initialize AOS for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
});


// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
  } else {
      scrollTopBtn.style.display = 'none';
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  });
}

function toggleFaq(element) {
  element.classList.toggle('active');
}


function sendWhatsAppMessage(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Format the message for WhatsApp
  const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`;

  // WhatsApp URL API with pre-filled message
  const whatsappURL = `https://wa.me/212629422435?text=${whatsappMessage}`;

  // Open WhatsApp with the message
  window.open(whatsappURL, '_blank');
}

// Select all sections and menu links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu li a");

// Function to activate the nav link corresponding to the section in view
function setActiveNavLink() {
    let index = sections.length;

    // Loop through sections to find the section in view
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    // Remove 'active' class from all links, then add to the current one
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
}

// Function to set "Home" as active on page load
function setInitialActiveNavLink() {
    navLinks[0].classList.add("active"); // Set "Home" as active initially
}

// Event listener for scroll to trigger the active link update
window.addEventListener("scroll", setActiveNavLink);

// Set "Home" as active when the page loads
window.addEventListener("DOMContentLoaded", setInitialActiveNavLink);


