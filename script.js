// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Order button functionality
const orderButtons = document.querySelectorAll('.order-btn, .order-item-btn');

orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Scroll to food section if clicking order button
        if (button.classList.contains('order-btn')) {
            e.preventDefault();
            const foodSection = document.getElementById('food');
            if (foodSection) {
                foodSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // For order item buttons, navigate to food section
            e.preventDefault();
            const foodSection = document.getElementById('food');
            if (foodSection) {
                foodSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Navigation link smooth scroll
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe food cards and other elements
document.querySelectorAll('.food-card, .how-card, .benefit-item').forEach(el => {
    observer.observe(el);
});

// Handle floating WhatsApp click
const whatsappBtn = document.querySelector('.floating-whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
        // Allow the default link behavior
        // The href is already set to https://wa.me with target="_blank"
    });
}

console.log('ProFood Delivery website loaded successfully');
