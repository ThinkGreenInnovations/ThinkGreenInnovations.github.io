<script>
        // JavaScript Redirect
    window.location.href = "html/home.html";

    // Load the header and footer includes
    fetch('includes/Header.html')
            .then(response => response.text())
            .then(data => {
        document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));

    fetch('includes/Footer.html')
            .then(response => response.text())
            .then(data => {
        document.getElementById('footer').innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
</script>