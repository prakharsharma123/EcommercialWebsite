
  const slides = document.querySelectorAll(".banner .slides img");
  let index = 0;

  function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  // initial display
  showSlides();

  // auto-slide every 3 seconds
  setInterval(showSlides, 3000);


const scrollContainer = document.querySelector('.trending-container');
setInterval(() => {
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000);
