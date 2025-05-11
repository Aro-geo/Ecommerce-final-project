// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  document.body.classList.toggle('menu-open');
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  
  // Simple validation
  if (!email || !email.includes('@')) {
    showAlert('Please enter a valid email address', 'error');
    return;
  }

  // Simulate form submission
  showAlert('Thank you for subscribing!', 'success');
  e.target.reset();
});

// Alert System
function showAlert(message, type = 'success') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  
  document.body.appendChild(alert);
  
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Update Copyright Year
const yearElement = document.getElementById('currentYear');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Intersection Observer for Lazy Loading
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));