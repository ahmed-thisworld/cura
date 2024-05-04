let slideIndex = 1;
showSlides(slideIndex, document.querySelector("#hero .col"));
showSlides(slideIndex, document.querySelector("#slide-show"));

// Next/previous controls
function plusSlides(n,slides) {
  showSlides(slideIndex += n,slides);
}

// Thumbnail image controls
function currentSlide(n, slides) {
  showSlides(slideIndex = n,slides);
}

function showSlides(n, slidesContainer) {
  let i;
  let slides = slidesContainer.querySelectorAll(".mySlides");
  let dots = slidesContainer.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
