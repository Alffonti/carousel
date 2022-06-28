const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0 // first element of the array (first slide)
const totalSlides = slides.length - 1 // last elemnt of the array

const carouselButtonNext = document.getElementById('carousel-button-next')
const carouselButtonPrev = document.getElementById('carousel-button-prev')

carouselButtonNext.addEventListener('click', moveToNextSlide)
carouselButtonPrev.addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible') // removing `visible` class from all eleements
        slide.classList.add('carousel-item-hidden') // making all elements hidden
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides) {
        // if it's the last slide in the carousel, then show next the first element (restart the carousel) 
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible") // making the next slide visible
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        // if it's the first slide in the carousel, then show previous the last element (making the carousel smooth) 
        slidePosition = totalSlides
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible") // making the previous slide visible
}