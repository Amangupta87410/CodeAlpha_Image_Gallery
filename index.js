  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  function filterImages(category) {
    galleryImages.forEach(img => {
      if (category === 'all' || img.dataset.category === category) {
        img.classList.remove('hidden');
      } else {
        img.classList.add('hidden');
      }
    });
  }

