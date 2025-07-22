const sounds = {
  stadium: new Audio("assets/music/other/stadium.mp3"),
  rain: new Audio("assets/music/rain.mp3"),
};

const playButtons = {
  stadium: document.getElementById("stadium-btn"),
  rain: document.getElementById("rain-btn"),
};

const volumeSliders = {
  stadium: document.getElementById("stadium-vol"),
  rain: document.getElementById("rain-vol"),
};

// Set loop and volume on load
Object.keys(sounds).forEach(key => {
  sounds[key].loop = true;

  // Convert slider value from string to number
  sounds[key].volume = parseFloat(volumeSliders[key].value);
});

// Volume control
Object.keys(volumeSliders).forEach(key => {
  volumeSliders[key].addEventListener("input", () => {
    sounds[key].volume = parseFloat(volumeSliders[key].value);
  });
});

// Play/Pause toggle
Object.keys(playButtons).forEach(key => {
  playButtons[key].addEventListener("click", () => {
    const audio = sounds[key];
    if (audio.paused) {
      audio.play().catch(e => console.error("Audio play error:", e));
      playButtons[key].textContent = "⏸️ Pause";
    } else {
      audio.pause();
      playButtons[key].textContent = "▶️ Play";
    }
  });
});

// Optional: Simple rain animation (canvas)
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
let drops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 200; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    len: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 4,
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 1;

  drops.forEach(drop => {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.len);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.len;
      drop.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}
drawRain();
