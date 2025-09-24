// Sidebar Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id], div[id="cover"]');
  const navDots = document.querySelectorAll('.section-nav .dot');

  // Smooth scrolling for navigation dots
  navDots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Update active dot based on scroll position
  function updateActiveDot() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        // Remove active class from all dots
        navDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to corresponding dot
        if (navDots[index]) {
          navDots[index].classList.add('active');
        }
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', updateActiveDot);
  
  // Initial call to set the correct active dot
  updateActiveDot();
});

// Existing carousel functionality (if any)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any existing carousels or sliders
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      loop: true
    });
  }
});
