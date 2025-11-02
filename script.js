// Basic interactivity: year, mobile nav toggle, gallery modal
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });
}

// gallery modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');
document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.dataset.full || img.src;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });
});
if (modalClose) {
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true'); }
  });
}