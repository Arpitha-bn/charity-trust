document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove("active"); // Hide current slide
        index = (index + 1) % slides.length; // Move to the next slide
        slides[index].classList.add("active"); // Show next slide
    }

    // Set first image as active initially
    slides[index].classList.add("active");

    // Change slide every 3 second
    setInterval(showNextSlide, 3000);
});
