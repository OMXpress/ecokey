document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    var heroSection = document.querySelector('.hero');
    var serviceSection = document.querySelector('.service'); // Replace with the appropriate selector for your target section

    // Calculate the offset for the next section
    var nextSectionOffset = serviceSection.offsetTop;

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Log the scroll position and the offset of the hero section
        console.log('Scroll Y:', window.scrollY);
        console.log('Next Section Offset:', nextSectionOffset);

        // Add the white background class to the navigation bar when scrolling starts reaching the next section
        if (window.scrollY + nav.offsetHeight >= nextSectionOffset) {
            console.log('Adding nav-white-bg');
            nav.classList.add('nav-white-bg');
        } else {
            console.log('Removing nav-white-bg');
            nav.classList.remove('nav-white-bg');
        }
    });
});
