window.addEventListener('DOMContentLoaded', () => {
  // Hide all pages first
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  renderSoilGrid();
  const session = getSession();
  if (session) {
    document.getElementById('nav-avatar').textContent = session.name.charAt(0).toUpperCase();
    document.getElementById('main-nav').classList.add('visible');
    showPage('home');
  } else {
    showPage('auth');
  }
});