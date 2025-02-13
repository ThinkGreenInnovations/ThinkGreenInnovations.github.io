document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalCards = 5; // You can dynamically calculate this based on the data length later
    let scrollAmount = 0;
    const cardWidth = 360; // Assuming this is the width of your card
    let scrollDirection = 'next';

    // Fetch the testimonials data from a JSON file or API
    fetch('../data/testimonials.json') // Adjust the path based on where your JSON is located
        .then(response => response.json())
        .then(data => {
            // Generate carousel cards dynamically
            data.forEach(testimonial => {
                const card = document.createElement('div');
                card.classList.add('carousel-card');
                card.innerHTML = `
                    <p>"${testimonial.quote}"</p>
                    <p>- ${testimonial.author}</p>
                `;
                carousel.appendChild(card);
            });

            // Update the total number of cards
            totalCards = data.length;
        })
        .catch(error => {
            console.error("Error fetching testimonials:", error);
        });

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
