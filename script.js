// ===============================
// ANIMATION DES SECTIONS AU SCROLL
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // stop l'observation après l'animation
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  sections.forEach(section => observer.observe(section));
});

// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById('dark-mode-toggle');

if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
