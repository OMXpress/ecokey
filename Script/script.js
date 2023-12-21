function showDescription(element) {
    element.querySelector('.description').style.opacity = 1;
    element.querySelector('.centered').style.opacity = 0;
}

function hideDescription(element) {
    element.querySelector('.description').style.opacity = 0;
    element.querySelector('.centered').style.opacity = 1;
}

window.onscroll = function onScroll() {
    function onScrollOne() {
        let aboutUs = document.getElementById("about-us");
        let title = document.getElementById("title");
        let overlay = document.getElementById("overlay");
        if (window.scrollY >= aboutUs.offsetTop - 200) {   
            overlay.style.height = "100%";
            title.style.opacity = "0";
        } else {
            overlay.style.height = "0";
            title.style.opacity = "1";
        }
    }
    function onScrollTwo() {
        let ourVision = document.getElementById("our-vision");
        if (window.scrollY >= ourVision.offsetTop - 200) {
            let overlay = document.getElementById("overlay-2");
            let titleTwo = document.getElementById("title-2");
            overlay.style.bottom = 0;
            overlay.style.opacity = 1; 
            titleTwo.style.opacity = 0;
        }
    }
    function onScrollThree() {
        let ourMission = document.getElementById("our-mission");
        if (window.scrollY >= ourMission.offsetTop - 200) {   
            let overlay = document.getElementById("overlay-3");
            let titleThree = document.getElementById("title-3")
            overlay.style.bottom = 0;
            overlay.style.opacity = 1;
            titleThree.style.opacity = 0;

        }
    }    
    onScrollOne();
    onScrollTwo();
    onScrollThree();
}