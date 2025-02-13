document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.carousel-card').offsetWidth;
    
    nextBtn.addEventListener('click', () => {
        if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
            scrollAmount += cardWidth + 10; // Card width plus gap
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth + 10; // Card width plus gap
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});
