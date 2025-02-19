// Select all testimonials
var testimonials = document.querySelectorAll('.testimonial');
var currentIndex = 0;

// Function to show the next testimonial
function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[currentIndex].classList.remove('active');

  // Update index to the next testimonial
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0; // Reset to the first testimonial
  }

  // Show the next testimonial
  testimonials[currentIndex].classList.add('active');
}

// Automatically switch testimonials every 3 seconds
setInterval(showNextTestimonial, 3000);

// Show the first testimonial when the page loads
testimonials[currentIndex].classList.add('active');




document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.logo');
  logo.style.transform = 'scale(1.2)';
  setTimeout(() => {
    logo.style.transform = 'scale(1)';
  }, 500);
});