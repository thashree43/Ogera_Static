document.addEventListener('DOMContentLoaded', function() {
    // Get navbar elements
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Function to close navbar and reset toggler icon
    function closeNavbar() {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    }

    // Close navbar when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || 
                            navbarToggler.contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            closeNavbar();
        }
    });
});
