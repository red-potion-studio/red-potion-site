// Scroll reveal effect
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // si anima solo una volta
    }
  });
}, {
  threshold: 0.2 // 20% visibile prima di attivarsi
});

revealElements.forEach(el => observer.observe(el));
