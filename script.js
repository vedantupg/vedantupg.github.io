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
