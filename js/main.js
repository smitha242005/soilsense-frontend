window.addEventListener('DOMContentLoaded', () => {
  renderSoilGrid();
  const session = getSession();
  if (session) {
    document.getElementById('nav-avatar').textContent = session.name.charAt(0).toUpperCase();
    document.getElementById('main-nav').classList.add('visible');
    setTimeout(() => showPage('home'), 50);
  }
});