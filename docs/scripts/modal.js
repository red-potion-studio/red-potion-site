const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = document.getElementById('modal-title');
const modalClient = document.getElementById('modal-client');
const modalYear = document.getElementById('modal-year');
const modalType = document.getElementById('modal-type');
const modalNotes = document.getElementById('modal-notes');
const modalClose = document.querySelector('.modal-close');

const mainImage = document.getElementById('main-image');
const thumbnailsContainer = modal.querySelector('.gallery-thumbnails');

function openModal(item) {
  modalTitle.textContent = item.dataset.title;
  modalClient.textContent = item.dataset.client;
  modalYear.textContent = item.dataset.year;
  modalType.textContent = item.dataset.type;
  modalNotes.innerHTML = item.dataset.notes;

  // Immagini della galleria
  const images = item.dataset.images.split(','); // es: "img1.jpg,img2.jpg,img3.jpg"
  mainImage.src = images[0];

  // Pulizia miniature precedenti
  thumbnailsContainer.innerHTML = '';
  images.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src.trim();
    if (index === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => {
      mainImage.src = src.trim();
      // Aggiorna stato active
      thumbnailsContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    });
    thumbnailsContainer.appendChild(thumb);
  });

  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

portfolioItems.forEach(item => {
  item.addEventListener('click', () => openModal(item));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});