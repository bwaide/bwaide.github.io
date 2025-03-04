document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle - handled inline in default.html
  
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add focus styles for accessibility
  const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
  focusableElements.forEach(el => {
    el.addEventListener('focus', function() {
      this.classList.add('ring-2', 'ring-primary', 'ring-opacity-50', 'outline-none');
    });
    
    el.addEventListener('blur', function() {
      this.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50', 'outline-none');
    });
  });
});