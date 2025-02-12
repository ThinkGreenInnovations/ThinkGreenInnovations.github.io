document.addEventListener('DOMContentLoaded', function () {
    fetch('/html/includes/header.html')
        .then(response => response.text())
        .then(data => document.querySelector('header').innerHTML = data);

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open'); // Toggles open class on mobile menu
        this.classList.toggle('active'); // Toggles active class on hamburger
    });

    // Adding event listener for links to close mobile menu on click
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });
});

