document.addEventListener('DOMContentLoaded', function() {
    
    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the full-size image path from the data attribute
            const fullSrc = item.querySelector('img').getAttribute('data-full-src');
            
            // If data attribute is missing, fallback to src
            const src = fullSrc || item.querySelector('img').getAttribute('src');
            
            lightboxImg.setAttribute('src', src);
            lightbox.classList.add('active');
        });
    });

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
             lightboxImg.setAttribute('src', ''); // Clear src after fade out
        }, 200);
    }

    // Close lightbox when clicking the 'X' button
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox when clicking *outside* the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Update Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
