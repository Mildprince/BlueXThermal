  
  console.log('SCROLL ANIMATION SCRIPT LOADED on page: ' + document.title);
  console.log('Document ready state:', document.readyState);
  
  // JavaScript to handle scroll-based animations
  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that should animate on scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // If element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Once we've animated it, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Element becomes visible when it's 10% in view
      threshold: 0.1,
      // Start the animation a bit before the element enters the viewport
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Start observing each element
    elements.forEach(element => {
      observer.observe(element);
    });
  });