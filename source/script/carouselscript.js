let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide #img1');
    const totalSlides = slides.length;
    const visibleSlides = 7; // Number of visible slides at a time
    const slideWidth = slides[0].clientWidth;

    // Calculate the next slide index
    currentSlide += step;

    // Handle loop back to the beginning or end of slides
    if (currentSlide < 0) {
        currentSlide = totalSlides - visibleSlides; // Move to the last visible slides
    } else if (currentSlide > totalSlides - visibleSlides) {
        currentSlide = 0; // Move to the beginning of the slides
    }
    const pvbuton = document.querySelector('.prev-btn')
    const nxbuton = document.querySelector('.next-btn')
    if (visibleSlides < 8) {
        nxbuton.style.display = "none";}

    pvbuton.addEventListener('click', function(){
        nxbuton.style.display = "inline";
    })

    // Update slide container position
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideWidth * currentSlide}px)`;

    // Show/Hide buttons based on current slide position
    document.querySelector('.prev-btn').style.display = currentSlide === 0 ? 'none' : 'block';


}

function moveSlide1(step) {
    const slides = document.querySelectorAll('.carousel-slide1 img');
    const totalSlides = slides.length;
    const visibleSlides = 7; // Number of visible slides at a time
    const slideWidth = slides[0].clientWidth;

    // Calculate the next slide index
    currentSlide += step;

    // Handle loop back to the beginning or end of slides
    if (currentSlide < 0) {
        currentSlide = totalSlides - visibleSlides; // Move to the last visible slides
    } else if (currentSlide > totalSlides - visibleSlides) {
        currentSlide = 0; // Move to the beginning of the slides
    }

    // Update slide container position
    document.querySelector('.carousel-slide1').style.transform = `translateX(${-slideWidth * currentSlide}px)`;

    // Show/Hide buttons based on current slide position
    document.querySelector('.prev-btn1').style.display = currentSlide === 0 ? 'none' : 'block';

}


window.onload = () => {
    const slides = document.querySelectorAll('.carousel-slide #img1, .carousel-slide1 ');
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100 / 3}%`;
    });

    // Initialize button visibility
    document.querySelector('.prev-btn').style.display = 'none'; // Initially hide the "prev" button
};









