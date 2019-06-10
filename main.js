//selecting the elements
const btnLeft = document.querySelector(".btns button:nth-child(1)");
const btnRight = document.querySelector(".btns button:nth-child(2)");
const slides = [...document.querySelectorAll(".slide")];

//function finding the slide with the class 'visible' and removing it from the slide
//set up to repetitions in autoSlide and moveLeft
const helper = () => {
    let currentSlide = slides.findIndex(el => el.classList.contains("visible"));
    slides[currentSlide].classList.remove("visible");
    return currentSlide
}

// function moving the slider in defult direction (right)
const autoSlide = () => {
let currentSlide = helper();
  if (currentSlide === slides.length - 1) {
    slides[0].classList.add("visible");
  } else {
    slides[currentSlide + 1].classList.add("visible");
  }
};

// setting an interval that will change the displayed slide every 3 seconds
let interval = setInterval(() => {
  autoSlide();
}, 3000);

// function moving the slider to the left -- triggered by btnLeft
const moveLeft = () => {
  //clearing the interval
  clearInterval(interval);
  let currentSlide = helper();
  if (currentSlide === 0) {
    slides[slides.length - 1].classList.add("visible");
  } else {
    slides[currentSlide - 1].classList.add("visible");
  }
  //setting a new interval
  interval = setInterval(() => {
    autoSlide();
  }, 3000);
};
// function moving the slider to the right-- triggered by btnRight
const moveRight = () => {
  //clearing the interval
  clearInterval(interval);
  autoSlide();
   //setting a new interval
  interval = setInterval(() => {
    autoSlide();
  }, 3000);
};

//adding listeners on the elements
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
