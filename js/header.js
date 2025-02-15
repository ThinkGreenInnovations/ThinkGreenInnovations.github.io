document.addEventListener('DOMContentLoaded', function () {
    const headerElement = document.querySelector('#header');

    if (headerElement) {
        fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                headerElement.innerHTML = data;

                // Add event listeners AFTER header is loaded
                const hamburger = document.querySelector('.hamburger');
                const mobileMenu = document.querySelector('.mobile-menu');

                if (hamburger && mobileMenu) {
                    hamburger.addEventListener('click', function () {
                        mobileMenu.classList.toggle('open'); // Open/close menu
                        this.classList.toggle('active'); // Animate hamburger
                    });

                    const mobileLinks = document.querySelectorAll('.mobile-menu a');
                    mobileLinks.forEach(link => {
                        link.addEventListener('click', function () {
                            mobileMenu.classList.remove('open'); // Close menu on click
                            hamburger.classList.remove('active');
                        });
                    });
                }
            })
            .catch(error => console.error('Error loading header:', error));
    }
});
