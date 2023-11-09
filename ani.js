// Add this JavaScript code for the slideshow functionality

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Hide prev button on the first slide
    if (slideIndex === 1) {
        prevButton.classList.add("hidden");
    } else {
        prevButton.classList.remove("hidden");
    }

    // Hide next button on the last slide
    if (slideIndex === slides.length) {
        nextButton.classList.add("hidden");
    } else {
        nextButton.classList.remove("hidden");
    }
}

// Automatically advance slides every 3 seconds
setInterval(() => changeSlide(1), 3000);
