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
            
            lightboxImg.setAttribute('src', fullSrc);
            lightbox.classList.add('active');
        });
    });

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        // Optional: Reset src to prevent flash of old image
        lightboxImg.setAttribute('src', ''); 
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
