function toggleScrollToTopButton() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 0) {
        scrollToTopButton.style.opacity = 1;
    } else {
        scrollToTopButton.style.opacity = 0;
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener to check the scroll position and toggle the button visibility
window.addEventListener('scroll', toggleScrollToTopButton);