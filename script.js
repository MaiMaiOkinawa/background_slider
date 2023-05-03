const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// The fisrt slide is 0
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++

  //Check if the slide is the last one, if so, we set the slide to be the first one - 0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  //Check if the slide is the first one, if so we set the slide to be the last one - last slide
  if (activeSlide < 0) {
    activeSlide = slides.length -1
  }
  setBgToBody()
  setActiveSlide()

})

setBgToBody();

// Change the bg image to be the active slide
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Loop through the slides
function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}