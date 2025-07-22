const sounds = {
  ambience: new Audio('assets/music/other/rail ambi.mp3'),
  smallcrowd: new Audio('assets/music/small crowd.mp3'),
  largecrowd: new Audio('assets/music/other/huge crowd.mp3'),
  train: new Audio('assets/music/other/train.mp3'),
};

const volumeControls = {
  ambience: document.getElementById('ambience-vol'),
  smallcrowd: document.getElementById('smallcrowd-vol'),
  largecrowd: document.getElementById('largecrowd-vol'),
  train: document.getElementById('train-vol'),
};

const playButtons = {
  ambience: document.getElementById('ambience-btn'),
  smallcrowd: document.getElementById('smallcrowd-btn'),
  largecrowd: document.getElementById('largecrowd-btn'),
  train: document.getElementById('train-btn'),
};

// Set looping only for background sounds
['ambience', 'smallcrowd', 'largecrowd'].forEach(key => {
  sounds[key].loop = true;
});

// Volume control
Object.keys(volumeControls).forEach(key => {
  volumeControls[key].addEventListener('input', () => {
    sounds[key].volume = volumeControls[key].value;
  });
});

// Play / Pause toggle for all
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
