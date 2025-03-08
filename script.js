document.addEventListener("DOMContentLoaded", function () {
    // Handle fade-in animations and experience items consistently
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% visible
    );

    // Observe all fade-in elements and experience items
    document.querySelectorAll(".fade-in, .experience-item, .education-item, .project-item, .publication-item").forEach(el => observer.observe(el));

    // Staggered animation for tech tags
    const tags = document.querySelectorAll(".tech-tag");
    tags.forEach((tag, index) => {
        setTimeout(() => {
            tag.classList.add("visible");
        }, index * 100); // Stagger effect
    });

    // Page-wide loaded class
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function() {
  // Stagger social icons
  const icons = document.querySelectorAll('.social-icons a');
  icons.forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add('icon-visible');
    }, i * 150);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutText = document.getElementById("aboutText");
  const toggleBtn = document.getElementById("toggleBtn");
  
  // Track whether it's expanded or not
  let isExpanded = false;
  
  toggleBtn.addEventListener("click", function() {
    // Toggle the 'expanded' class on the collapsible container
    aboutText.classList.toggle("expanded");
    
    // Flip the state and update the button text
    isExpanded = !isExpanded;
    toggleBtn.textContent = isExpanded ? "Read Less" : "Read More";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Typing effect
  const typingElement = document.querySelector('.typing-text');
  const phrases = [
    "AI/ML Engineer",
    "RAG Specialist",
    "Full Stack Developer"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  
  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      // Removing characters
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Faster when deleting
    } else {
      // Adding characters
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; // Normal speed when typing
    }
    
    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at the end of phrase
      isDeleting = true;
      typeSpeed = 1500; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to next phrase
      phraseIndex = (phraseIndex + 1) % phrases.length;
      // Pause before typing next phrase
      typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
  }
  
  // Start the typing effect
  setTimeout(typeWriter, 1000);
  
  // Parallax effect
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    parallaxLayers.forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const yPos = -(scrollPosition * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Additional animation for social icons
  const icons = document.querySelectorAll('.social-icons a');
  icons.forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add('icon-visible');
    }, i * 150 + 1000); // Delay after page load
  });
});
