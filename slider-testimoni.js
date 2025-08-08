// Hapus tag <script> di file JS
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const prevBtn = document.querySelector(".snap-slider-wrapper .prev-btn");
  const nextBtn = document.querySelector(".snap-slider-wrapper .next-btn");

  // Pastikan semua elemen ditemukan sebelum lanjut
  if (!slider || !prevBtn || !nextBtn) return;

  // Ambil lebar slide pertama, fallback ke 0 jika tidak ada
  const firstSlide = slider.querySelector(".snap-slide");
  const slideWidth = firstSlide ? firstSlide.offsetWidth + 24 : 0; // 24px gap

  prevBtn.addEventListener("click", function () {
    slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", function () {
    slider.scrollBy({ left: slideWidth, behavior: "smooth" });
  });
});