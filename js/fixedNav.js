document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header_section');
    const headerOffset = header.offsetTop;

    function handleScroll() {
      if (window.pageYOffset > headerOffset) {
        header.classList.add('fixed-navbar');
      } else {
        header.classList.remove('fixed-navbar');
      }
    }

    window.addEventListener('scroll', handleScroll);
  });