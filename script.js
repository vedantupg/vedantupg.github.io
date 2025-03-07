document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".experience-item");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".tech-tag");

    function revealTags() {
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.classList.add("visible");
            }, index * 100); // Staggered effect
        });
    }

    revealTags();
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is in view
    );

    document.querySelectorAll(".fade-in").forEach(section => {
        observer.observe(section);
    });
});
