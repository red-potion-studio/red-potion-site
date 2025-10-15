const contactModal = document.getElementById('contact-modal');
const openContact = document.getElementById('open-contact-modal');
const closeContact = contactModal.querySelector('.modal-close');

openContact.addEventListener('click', () => {
  contactModal.classList.add('show');
});

closeContact.addEventListener('click', () => {
  contactModal.classList.remove('show');
});

contactModal.addEventListener('click', e => {
  if (e.target === contactModal) contactModal.classList.remove('show');
});

document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const subjectSelect = document.getElementById('subject');
  const subContainer = document.getElementById('subSubjectContainer');
  const subSelect = document.getElementById('subSubject');

  const subOptions = {
    vtt: ['Roll20', 'Fantasy Grounds', 'FoundryVTT'],
    translation: ['English → Italian', 'Italian → English', 'Other Language Pair'],
    layout: ['Book / Manual', 'Adventure Module', 'Other Format']
  };

  subjectSelect.addEventListener('change', () => {
    const selected = subjectSelect.value;

    if (subOptions[selected]) {
      subContainer.classList.remove('hidden');
      subSelect.innerHTML = '<option value="" disabled selected>Select an option...</option>';

      subOptions[selected].forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.toLowerCase().replace(/\s+/g, '-');
        opt.textContent = option;
        subSelect.appendChild(opt);
      });

      subSelect.required = true;
    } else {
      subContainer.classList.add('hidden');
      subSelect.innerHTML = '';
      subSelect.required = false;
    }
  });
});

const textarea = document.getElementById('message');
if (textarea) {
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  });
}