document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const imgEl = document.getElementById('lightboxImage');
  let currentIndex = 0;

  // open modal with clicked image
  triggers.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = parseInt(link.dataset.index, 10);
      showImage(currentIndex);
    });
  });

  // navigation buttons
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    showImage(currentIndex);
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % triggers.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    const src = triggers[index].dataset.img;
    imgEl.src = src;
  }
});
