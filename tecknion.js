// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Toggle (for mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handling Hero Section Height
function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    hero.style.height = `${window.innerHeight}px`;
}

// Initial Call
adjustHeroHeight();

// Adjust on Resize
window.addEventListener('resize', adjustHeroHeight);

// Portfolio Gallery Scroll Behavior (if needed)
const portfolioSections = document.querySelectorAll('.portfolio-section');
portfolioSections.forEach(section => {
    const scrollContainer = section.querySelector('.scroll-container');
    const scrollAmount = 200; // Amount of scroll per click
    
    // Add scroll buttons if necessary (code to be added based on your needs)
    
    // Example scroll buttons implementation
    const scrollLeftBtn = section.querySelector('.scroll-left');
    const scrollRightBtn = section.querySelector('.scroll-right');
    
    if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});
