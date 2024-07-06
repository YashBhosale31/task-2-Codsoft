// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('active');
    });
});

// Dynamic testimonials
const testimonials = [
    { name: "John Doe", text: "This product has revolutionized my workflow!" },
    { name: "Jane Smith", text: "I can't imagine working without it now." },
    { name: "Bob Johnson", text: "The customer support is top-notch." },
    { name: "Alice Brown", text: "Highly recommended for all professionals." }
];

const testimonialSlider = document.getElementById('testimonialSlider');

testimonials.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');
    testimonialElement.innerHTML = `
        <p>${testimonial.text}</p>
        <strong>- ${testimonial.name}</strong>
    `;
    testimonialSlider.appendChild(testimonialElement);
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    // Simulating form submission
    console.log('Form submitted:', formObject);
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Responsive design adjustments
function handleResponsiveDesign() {
    const windowWidth = window.innerWidth;
    const heroContent = document.querySelector('.hero-content');
    const features = document.querySelectorAll('.feature');

    if (windowWidth < 768) {
        heroContent.style.maxWidth = '100%';
        features.forEach(feature => {
            feature.style.height = 'auto';
        });
    } else {
        heroContent.style.maxWidth = '600px';
        features.forEach(feature => {
            feature.style.height = '250px';
        });
    }
}

window.addEventListener('resize', handleResponsiveDesign);
handleResponsiveDesign();