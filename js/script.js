const revealElements = document.querySelectorAll(
    ".why-us, .featured-tours, .destinations, .testimonials, .about-jeet, .contact-section, .site-footer"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (elementTop < triggerPoint) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);