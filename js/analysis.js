let currentFile = null;

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) loadPreview(file);
}
function handleDrop(e) {
  e.preventDefault();
  document.getElementById('upload-zone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) loadPreview(file);
}
function loadPreview(file) {
  currentFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('preview-img').src = ev.target.result;
    document.getElementById('upload-placeholder').style.display = 'none';
    document.getElementById('upload-preview').style.display = 'block';
    document.getElementById('result-placeholder').style.display = 'block';
    document.getElementById('result-content').classList.remove('show');
    document.getElementById('loading-state').classList.remove('show');
  };
  reader.readAsDataURL(file);
}

function useSampleImage() {
  const canvas = document.createElement('canvas');
  canvas.width = 400; canvas.height = 300;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(200,150,10,200,150,200);
  grad.addColorStop(0, '#8B6914');
  grad.addColorStop(0.4, '#6B4C11');
  grad.addColorStop(0.8, '#4A3209');
  grad.addColorStop(1, '#2D1F05');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,400,300);
  for (let i=0;i<200;i++) {
    ctx.fillStyle = `rgba(${Math.random()>0.5?180:80},${Math.random()>0.5?120:50},20,${Math.random()*0.3})`;
    ctx.beginPath();
    ctx.arc(Math.random()*400, Math.random()*300, Math.random()*4+1, 0, Math.PI*2);
    ctx.fill();
  }
  canvas.toBlob(blob => {
    const file = new File([blob], 'sample_soil.png', {type:'image/png'});
    loadPreview(file);
  });
}

function clearImage() {
  currentFile = null;
  document.getElementById('file-input').value = '';
  document.getElementById('upload-placeholder').style.display = 'flex';
  document.getElementById('upload-preview').style.display = 'none';
  document.getElementById('result-placeholder').style.display = 'block';
  document.getElementById('result-content').classList.remove('show');
  document.getElementById('loading-state').classList.remove('show');
}

const BACKEND_URL = 'https://soilsense-backend-api.onrender.com';

async function runAnalysis() {
  if (!currentFile) {
    alert('Please upload an image first!');
    return;
  }

  document.getElementById('result-placeholder').style.display = 'none';
  document.getElementById('result-content').classList.remove('show');
  document.getElementById('loading-state').classList.add('show');

  try {
    // ── Convert file to base64 properly ──
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(currentFile);
    });

    const imgSrc = document.getElementById('preview-img').src;

    const response = await fetch(`${BACKEND_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64 })
    });

    const data = await response.json();

    if (data.success) {
      showResult(data, imgSrc);
    } else {
      throw new Error(data.error || 'Prediction failed');
    }
  } catch (err) {
    console.error('API error:', err);
    alert('Analysis failed. Please try again.');
    document.getElementById('loading-state').classList.remove('show');
    document.getElementById('result-placeholder').style.display = 'block';
  }
}

function showResult(data, imgSrc) {
  document.getElementById('loading-state').classList.remove('show');
  document.getElementById('result-thumb').src = imgSrc;

  // ── Soil Type Badge ──
  document.getElementById('res-soil-type').textContent =
    '🌱 ' + data.display_name;

  // ── Metrics ──
  document.getElementById('res-confidence').textContent =
    data.confidence + '% confident';
  document.getElementById('res-moisture').textContent =
    data.moisture_level;
  document.getElementById('res-found').textContent =
    data.found_in;

  // ── Confidence Bar ──
  setTimeout(() => {
    document.getElementById('conf-fill').style.width = data.confidence + '%';
  }, 100);

  // ── Description ──
  document.getElementById('res-description').textContent = data.description;

  // ── Characteristics ──
  document.getElementById('res-characteristics').textContent =
    data.characteristics;

  // ── Crops ──
  const cropsContainer = document.getElementById('res-crops');
  cropsContainer.innerHTML = '';
  data.crops.forEach(crop => {
    const tag = document.createElement('span');
    tag.className = 'crop-tag';
    tag.textContent = crop;
    cropsContainer.appendChild(tag);
  });

  // ── Top 3 Predictions ──
  const top3Container = document.getElementById('res-top3');
  top3Container.innerHTML = '';
  data.top3.forEach(item => {
    top3Container.innerHTML += `
      <div class="top3-item">
        <span class="top3-name">${item.soil}</span>
        <div class="top3-bar-wrap">
          <div class="top3-bar" style="width:${item.confidence}%"></div>
        </div>
        <span class="top3-conf">${item.confidence}%</span>
      </div>`;
  });

  document.getElementById('result-content').classList.add('show');
}