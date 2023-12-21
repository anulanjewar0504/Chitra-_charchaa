const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function slide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(slide, 3000); // Change interval as needed


nextButton.addEventListener('click', () => {
  slide();
});
