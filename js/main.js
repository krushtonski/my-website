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

// Contact form — submits to Web3Forms, which emails the site owner directly
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('.btn-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  status.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const result = await response.json();

    if (response.ok && result.success) {
      status.textContent = "Thanks for reaching out — I'll get back to you soon.";
      form.reset();
    } else {
      status.textContent = "Something went wrong sending your message. Please email katherinerushton7@gmail.com directly.";
    }
  } catch (err) {
    status.textContent = "Something went wrong sending your message. Please email katherinerushton7@gmail.com directly.";
  } finally {
    submitBtn.disabled = false;
  }
});
