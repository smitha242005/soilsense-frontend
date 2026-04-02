// Unsplash image mapping for each soil type
const soilImages = {
  'alluvial': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop',
  'black': 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
  'red': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  'clay': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=300&fit=crop',
  'laterite': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
  'loam': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
  'arid': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop',
  'mountain': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop',
  'yellow': 'https://images.unsplash.com/photo-1591177813945-c8caa3970b4e?w=400&h=300&fit=crop',
  'cinder': 'https://images.unsplash.com/photo-1561990791-13de8d916cf4?w=400&h=300&fit=crop'
};

function renderSoilGrid() {
  const grid = document.getElementById('soil-grid');
  grid.innerHTML = soils.map(s => `
    <div class="soil-card" onclick="showSoilDetail('${s.id}')">
      <div class="soil-card-img">
        <img src="${soilImages[s.id] || 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop'}" 
             alt="${s.name}" 
             style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius) var(--radius) 0 0;"
             onerror="this.src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop'">
      </div>
      <div class="soil-card-body">
        <h3>${s.name}</h3>
        <p>${s.desc.substring(0,90)}…</p>
        <div class="soil-tags">
          <span class="soil-tag">${s.tag}</span>
          <span class="soil-tag">💧 ${s.idealMin}–${s.idealMax}%</span>
        </div>
      </div>
    </div>
  `).join('');
}

function showSoilDetail(id) {
  const s = soils.find(x => x.id === id);
  if (!s) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('soil-detail-page').classList.add('active');

  const heroEl = document.getElementById('detail-hero');
  heroEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${soilImages[s.id]}')`;
  heroEl.style.backgroundSize = 'cover';
  heroEl.style.backgroundPosition = 'center';

  document.getElementById('detail-tag').textContent = s.tag;
  document.getElementById('detail-name').textContent = s.name;
  document.getElementById('detail-desc').textContent = s.desc;
  document.getElementById('detail-desc-title').textContent = 'About ' + s.name;
  document.getElementById('detail-irr-text').textContent = s.irr;
  document.getElementById('detail-list').innerHTML = s.facts.map(f => `<li>${f}</li>`).join('');

  document.getElementById('detail-stats').innerHTML = `
    <div class="detail-stat-card"><div class="ds-icon">💧</div><div class="ds-val">${s.idealMin}–${s.idealMax}%</div><div class="ds-lbl">Ideal Moisture Range</div></div>
    <div class="detail-stat-card"><div class="ds-icon">🌾</div><div class="ds-val">${s.crops.split(',')[0].trim()}</div><div class="ds-lbl">Common Crops</div></div>
    <div class="detail-stat-card"><div class="ds-icon">📊</div><div class="ds-val">${s.idealMax - s.idealMin}%</div><div class="ds-lbl">Moisture Tolerance</div></div>
  `;

  const indicator = document.getElementById('range-indicator');
  indicator.style.left = s.idealMin + '%';
  indicator.style.width = (s.idealMax - s.idealMin) + '%';
  indicator.textContent = s.idealMin + '–' + s.idealMax + '%';

  window.scrollTo(0,0);
}