// DOM Elements
const header = document.getElementById('main-header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

// Initialize the website
function initWebsite() {
    // Set up navigation
    setupNavigation();
    
    // Set up scroll effects
    setupScrollEffects();
    
    // Set up market price updates (only on home page)
    if (document.querySelector('.market-prices')) {
        setupMarketPrices();
    }
}

// Set up navigation
function setupNavigation() {
    if (!mobileMenuToggle || !mainNav) return;
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuToggle.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Set up market price updates
function setupMarketPrices() {
    // Simulate live price updates
    setInterval(() => {
        const priceElements = document.querySelectorAll('.price-value');
        if (priceElements.length > 0) {
            // Randomly adjust prices slightly
            priceElements.forEach(el => {
                const currentPrice = parseFloat(el.textContent.replace('$', ''));
                const change = (Math.random() - 0.5) * 0.5; // Random change between -0.25 and +0.25
                const newPrice = Math.max(75, Math.min(90, currentPrice + change)); // Keep within reasonable range
                el.textContent = '$' + newPrice.toFixed(2);
                
                // Update change indicator
                const changeElement = el.nextElementSibling;
                if (changeElement && changeElement.classList.contains('price-change')) {
                    const isPositive = change >= 0;
                    changeElement.className = `price-change ${isPositive ? 'positive' : 'negative'}`;
                    changeElement.innerHTML = `<i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i> ${isPositive ? '+' : ''}${Math.abs(change).toFixed(1)}%`;
                }
            });
        }
    }, 30000); // Update every 30 seconds
}

// Set up scroll effects
function setupScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out`;
                entry.target.style.opacity = 1;
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.overview-card, .price-card, .mv-card, .service-tile, .qual-card').forEach(el => {
        el.style.opacity = 0;
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initWebsite);