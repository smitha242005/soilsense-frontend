// v3
window.addEventListener('DOMContentLoaded', () => {
  // Force remove auth active first
  document.getElementById('auth-page').classList.remove('active');
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