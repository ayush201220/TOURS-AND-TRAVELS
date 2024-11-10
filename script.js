document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for sections as you scroll down
    const sections = document.querySelectorAll('.packages, #car-rentals, #contact');
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            if (sectionPosition < screenPosition - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);

    // Form submission alert with animation
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        this.reset(); // Reset the form after submission
    });
});
