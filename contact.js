// DOM Elements
const contactForm = document.getElementById('contactForm');

// Initialize contact page
function initContactPage() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        const sendButton = contactForm.querySelector('.send-button');
        const originalText = sendButton.innerHTML;
        
        sendButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        sendButton.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
        
        // Reset form
        contactForm.reset();
        
        // Revert button after 3 seconds
        setTimeout(() => {
            sendButton.innerHTML = originalText;
            sendButton.style.background = '';
        }, 3000);
        
        // Log to console (for demo purposes)
        console.log(`Contact form submitted:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message sent to: makben03@gmail.com`);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main functionality
    if (typeof initWebsite === 'function') {
        initWebsite();
    }
    
    // Initialize contact page if on contact page
    if (contactForm) {
        initContactPage();
    }
});