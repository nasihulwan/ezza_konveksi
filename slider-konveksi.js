document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".slider-konveksi .prev");
  const nextBtn = document.querySelector(".slider-konveksi .next");
  const images = document.querySelectorAll(".slider-track img");
  const imageWidth = 270; // image width + gap
  const visibleImages = 4;
  let position = 0;
  let autoSlideInterval;

  if (!track || !prevBtn || !nextBtn || images.length === 0) return;

  function updateSlider() {
    track.style.transform = `translateX(-${position * imageWidth}px)`;
  }

  function slideNext() {
    if (position < images.length - visibleImages) {
      position++;
    } else {
      position = 0;
    }
    updateSlider();
  }

  function slidePrev() {
    if (position > 0) {
      position--;
    } else {
      position = images.length - visibleImages;
      if (position < 0) position = 0;
    }
    updateSlider();
  }

  nextBtn.addEventListener("click", slideNext);
  prevBtn.addEventListener("click", slidePrev);

  // Auto slide setiap 0.5 detik, berhenti saat hover
  function startAutoSlide() {
    autoSlideInterval = setInterval(slideNext, 10000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
});