const sounds = {
  cooking: new Audio('assets/music/other/kitchen.mp3'),
  home: new Audio('assets/music/other/fire.mp3'),
};

const volumeControls = {
  cooking: document.getElementById('cooking-vol'),
  home: document.getElementById('home-vol'),
};

const playButtons = {
  cooking: document.getElementById('cooking-btn'),
  home: document.getElementById('home-btn'),
};

// Volume setup
Object.keys(volumeControls).forEach(key => {
  volumeControls[key].addEventListener('input', () => {
    sounds[key].volume = volumeControls[key].value;
  });
});

// Loop both
Object.keys(sounds).forEach(key => {
  sounds[key].loop = true;
});

// Play/Pause logic
Object.keys(playButtons).forEach(key => {
  playButtons[key].addEventListener('click', () => {
    const audio = sounds[key];
    if (audio.paused) {
      audio.play();
      playButtons[key].textContent = '⏸️ Pause';
    } else {
      audio.pause();
      playButtons[key].textContent = '▶️ Play';
    }
  });
});

// Simple animated steam
const canvas = document.getElementById('steam');
const ctx = canvas.getContext('2d');
let steamParticles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createSteamParticle() {
  steamParticles.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    radius: Math.random() * 10 + 5,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.2 + 0.1
  });
}

function drawSteam() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  steamParticles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();
    p.y -= p.speed;
    if (p.y + p.radius < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawSteam);
}

// Generate initial particles
for (let i = 0; i < 40; i++) createSteamParticle();
drawSteam();
