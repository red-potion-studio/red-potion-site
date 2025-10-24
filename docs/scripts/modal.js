// ----------------------
// Portfolio Modal
// ----------------------
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = modal.querySelector('#modal-title');
const modalLink = document.getElementById('modal-link');
const modalClient = document.getElementById('modal-client');
const modalYear = document.getElementById('modal-year');
const modalType = document.getElementById('modal-type');
const modalNotes = document.getElementById('modal-notes');
const modalChallenges = document.getElementById('modal-challenges');
const modalClose = modal.querySelector('.modal-close');

const mainImage = document.getElementById('main-image');
const thumbnailsContainer = modal.querySelector('.gallery-thumbnails');

function openModal(item) {
  modalTitle.textContent = item.dataset.title;
  
  if (item.dataset.link && item.dataset.linkType) {
    let url = item.dataset.link.trim();
    if (!url.startsWith('http')) url = 'https://' + url;
    modalLink.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${item.dataset.linkType}</a>`;
  } else {
    modalLink.textContent = 'Not Available';
  }

  modalClient.textContent = item.dataset.client || '';
  modalYear.textContent = item.dataset.year || '';
  modalType.textContent = item.dataset.type || '';
  modalNotes.innerHTML = item.dataset.notes || '';
  modalChallenges.innerHTML = item.dataset.challenges || '';

  // Galleria immagini
  if (item.dataset.images) {
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
  } else {
    mainImage.src = '';
    thumbnailsContainer.innerHTML = '';
  }

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

portfolioItems.forEach(item => {
  item.addEventListener('click', () => openModal(item));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// ----------------------
// Examples Modal
// ----------------------

const examplesModal = document.getElementById("examples-modal");
const openExamplesBtn = document.getElementById("open-examples");
const closeExamplesBtn = examplesModal.querySelector(".modal-close");

openExamplesBtn.addEventListener("click", function(e) {
  e.preventDefault();
  examplesModal.classList.add("show");
  document.body.style.overflow = 'hidden';
});

closeExamplesBtn.addEventListener("click", function() {
  examplesModal.classList.remove("show");
  document.body.style.overflow = '';
});

examplesModal.addEventListener("click", function(e) {
  if(e.target === examplesModal) {
    examplesModal.classList.remove("show");
    document.body.style.overflow = '';
  }
});

// ----------------------
// Services Modal
// ----------------------
const servicesModal = document.getElementById("services-modal");
const openServicesBtn = document.getElementById("open-services");
const closeServicesBtn = servicesModal.querySelector(".modal-close");

openServicesBtn.addEventListener("click", function(e) {
  e.preventDefault();
  servicesModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeServicesBtn.addEventListener("click", function() {
  servicesModal.classList.remove("show");
  document.body.style.overflow = "";
});

servicesModal.addEventListener("click", function(e) {
  if (e.target === servicesModal) {
    servicesModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});
