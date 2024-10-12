function toggleMenu() {
    var navElements = document.getElementById("nav-elements");
    navElements.classList.toggle("active");
}

/* Close the menu when clicking outside of it */
document.addEventListener('click', function(event) {
    var navElements = document.getElementById("nav-elements");
    var isClickInside = navElements.contains(event.target);
    var isHamburgerClick = event.target.classList.contains("hamburger");

    if (!isClickInside && !isHamburgerClick) {
        navElements.classList.remove("active");
    }
});


// Slider Section




const images = [
    { imgId: "image1", headingId: "heading1" },
    { imgId: "image2", headingId: "heading2" },
    { imgId: "image3", headingId: "heading3" }
];

let currentIndex = 0;

function changeSlide() {
    // Reset all images and headings
    images.forEach(image => {
        document.getElementById(image.imgId).classList.remove('active');
        document.getElementById(image.headingId).classList.remove('bold');
    });

    // Set the new active image and bold the corresponding heading
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById(images[currentIndex].imgId).classList.add('active');
    document.getElementById(images[currentIndex].headingId).classList.add('bold');
}

// Change slide every 4 seconds
setInterval(changeSlide, 2000);