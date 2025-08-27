document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.lightbox');
  const container = document.getElementById('lightboxContainer');
  let currentIndex = 0;

  triggers.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = parseInt(link.dataset.index, 10);
      showImage(currentIndex);
    });
  });

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
    container.innerHTML = `<img src="${src}" class="w-100 rounded" alt="Expanded gallery image">`;
  }
});
