document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.carousel-card');
    const totalCards = cards.length;
    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 10; // Card width plus gap
    let scrollDirection = 'next'; // To track direction

    // Function to move the carousel
    function moveCarousel() {
        if (scrollDirection === 'next') {
            scrollAmount += cardWidth;
        } else if (scrollDirection === 'prev') {
            scrollAmount -= cardWidth;
        }
        
        // If we're at the last card, loop to the first
        if (scrollAmount >= totalCards * cardWidth) {
            scrollAmount = 0;
        }

        // If we're at the first card, loop to the last
        if (scrollAmount < 0) {
            scrollAmount = (totalCards - 1) * cardWidth;
        }

        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }

    // When clicking the "Next" button
    nextBtn.addEventListener('click', () => {
        scrollDirection = 'next';
        moveCarousel();
    });

    // When clicking the "Previous" button
    prevBtn.addEventListener('click', () => {
        scrollDirection = 'prev';
        moveCarousel();
    });

    // Optionally, to make it auto-scroll
    setInterval(() => {
        scrollDirection = 'next';
        moveCarousel();
    }, 3000); // Every 3 seconds
});
