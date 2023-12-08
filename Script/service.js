document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".section");

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el))