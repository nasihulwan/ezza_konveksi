// ...existing code...

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

// ...existing code...