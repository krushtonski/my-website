// Mobile nav toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (front-end only placeholder)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Thanks for reaching out — I'll get back to you soon.";
  form.reset();
});
