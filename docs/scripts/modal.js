const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = document.getElementById('modal-title');
const modalClient = document.getElementById('modal-client');
const modalYear = document.getElementById('modal-year');
const modalType = document.getElementById('modal-type');
const modalNotes = document.getElementById('modal-notes');
const modalClose = modal.querySelector('.modal-close');

const mainImage = document.getElementById('main-image');
const thumbnailsContainer = modal.querySelector('.gallery-thumbnails');

function openModal(item) {
  modalTitle.textContent = item.dataset.title;
  modalClient.textContent = item.dataset.client;
  modalYear.textContent = item.dataset.year;
  modalType.textContent = item.dataset.type;
  modalNotes.innerHTML = item.dataset.notes;

  // Immagini della galleria
  const images = item.dataset.images.split(',');
  mainImage.src = images[0].trim();

  thumbnailsContainer.innerHTML = '';
  images.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src.trim();
    if (index === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => {
      mainImage.src = src.trim();
      thumbnailsContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    });
    thumbnailsContainer.appendChild(thumb);
  });

  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // blocca scroll body
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = ''; // ripristina scroll body
}

portfolioItems.forEach(item => {
  item.addEventListener('click', () => openModal(item));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});