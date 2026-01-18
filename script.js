// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add some delay/easing to outline for smoother feel
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Optional: Stop observing once revealed
             observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target elements to animate
const animatedElements = document.querySelectorAll('.menu-item, .about-content, .location-card, .section-header');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add 'in-view' class style dynamically or in CSS.
// Let's add the logic here to modify their styles directly for simplicity 
// or assume a class in CSS. Since I didn't add .in-view in CSS, I'll update styles here.

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .in-view {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// Glitch effect on Hero Text (Random character swap)
const glitchText = document.querySelector('.glitch-text');
const originalText = glitchText.dataset.text;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*';

glitchText.addEventListener('mouseover', event => {
    let iteration = 0;
    let interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * 43)];
            })
            .join('');
        
        if(iteration >= originalText.length) { 
            clearInterval(interval);
        }
        
        iteration += 1/3;
    }, 30);
});
