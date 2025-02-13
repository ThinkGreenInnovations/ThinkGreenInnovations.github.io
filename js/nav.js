document.addEventListener("DOMContentLoaded", function () {
    // Get all the nav links
    const navLinks = document.querySelectorAll("nav a");

    // Get the current page URL
    const currentPage = window.location.pathname;

    // Loop through the nav links
    navLinks.forEach(link => {
        // If the href of the link matches the current page URL, add the 'active' class
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});
