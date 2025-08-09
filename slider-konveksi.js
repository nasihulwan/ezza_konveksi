document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.slider-track');
  const prevBtn = document.querySelector('.slider-konveksi .prev');
  const nextBtn = document.querySelector('.slider-konveksi .next');
  const images = track.querySelectorAll('img');
  const imageWidth = images[0] ? images[0].offsetWidth + 20 : 270; // 20px gap
  let position = 0;
  const visibleImages = Math.floor(track.offsetWidth / imageWidth);

  function updateSlider() {
    track.style.transform = `translateX(-${position * imageWidth}px)`;
  }

  function slideNext() {
    if (position < images.length - visibleImages) {
      position++;
      updateSlider();
    }
  }

  function slidePrev() {
    if (position > 0) {
      position--;
      updateSlider();
    }
  }

  nextBtn.addEventListener("click", slideNext);
  prevBtn.addEventListener("click", slidePrev);

  // Swipe/drag support untuk slider-konveksi
  let startX = 0;
  let isDragging = false;

  // Touch events
  track.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener("touchmove", function(e) {
    if (!isDragging) return;
    let diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) { // threshold swipe
      if (diff < 0) {
        slideNext();
      } else {
        slidePrev();
      }
      isDragging = false;
    }
  });

  track.addEventListener("touchend", function() {
    isDragging = false;
  });

  // Mouse drag (optional, untuk desktop)
  track.addEventListener("mousedown", function(e) {
    startX = e.clientX;
    isDragging = true;
  });

  track.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    let diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        slideNext();
      } else {
        slidePrev();
      }
      isDragging = false;
    }
  });

  track.addEventListener("mouseup", function() {
    isDragging = false;
  });
});