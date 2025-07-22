// park.js

const sounds = {
  nature: new Audio("assets/music/other/nature.mp3"),
  people: new Audio("assets/music/other/huge crowd.mp3"),
};

const playButtons = {
  nature: document.getElementById("nature-btn"),
  people: document.getElementById("people-btn"),
};

const volumeSliders = {
  nature: document.getElementById("nature-vol"),
  people: document.getElementById("people-vol"),
};

// Loop & Initial Volume
Object.keys(sounds).forEach(key => {
  sounds[key].loop = true;
  sounds[key].volume = volumeSliders[key].value;
});

// Volume Control
Object.keys(volumeSliders).forEach(key => {
  volumeSliders[key].addEventListener("input", () => {
    sounds[key].volume = volumeSliders[key].value;
  });
});

// Play/Pause Buttons
Object.keys(playButtons).forEach(key => {
  playButtons[key].addEventListener("click", () => {
    const audio = sounds[key];
    if (audio.paused) {
      audio.play();
      playButtons[key].textContent = "⏸️ Pause";
    } else {
      audio.pause();
      playButtons[key].textContent = "▶️ Play";
    }
  });
});


// 🍃 Floating Leaves Animation
const canvas = document.getElementById("leaf-canvas");
const ctx = canvas.getContext("2d");
let leaves = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 40; i++) {
  leaves.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 1 - 0.5,
    rotation: Math.random() * 360,
  });
}

function drawLeaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

  leaves.forEach(leaf => {
    ctx.beginPath();
    ctx.ellipse(leaf.x, leaf.y, leaf.size, leaf.size / 2, leaf.rotation, 0, Math.PI * 2);
    ctx.fill();

    leaf.y += leaf.speedY;
    leaf.x += leaf.speedX;
    leaf.rotation += 0.01;

    if (leaf.y > canvas.height) {
      leaf.y = -20;
      leaf.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawLeaves);
}
drawLeaves();
