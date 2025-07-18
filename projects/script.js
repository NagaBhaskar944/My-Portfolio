// This file can be used for any interactive elements.
// For now, let's add a simple scroll effect for navigation.

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// You can add more JavaScript here later, e.g.,
// - A 'back to top' button
// - Image carousels for projects
// - Form validation (if you add a contact form)