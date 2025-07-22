// ---------- SHUFFLE MUSIC ----------
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ---------- MUSIC TRACKS ----------
const musicTracks = [
  "assets/music/radio/Thumbi Vaa.m4a",
  "assets/music/radio/Theerame.m4a",
  "assets/music/radio/Sundhariye Vaa.m4a",
  "assets/music/radio/Pinakkamaano.m4a",
  "assets/music/radio/pavizhamalli.m4a",
  "assets/music/radio/Para Para.m4a",
  "assets/music/radio/Orupushpam.m4a",
  "assets/music/radio/Nilaavil Ellaame.m4a",
  "assets/music/radio/Nee Madhupakaroo.m4a",
  "assets/music/radio/Namosthuthe.m4a",
  "assets/music/radio/Meharuba(D).m4a",
  "assets/music/radio/Kilukil Pambaram.m4a",
  "assets/music/radio/Khalbinnakame.m4a",
  "assets/music/radio/Kanmani Anbodu Kadhalan.m4a",
  "assets/music/radio/Jupiter Mazha (Lofi Flip) (feat. Sruthi).m4a",
  "assets/music/radio/Insaanile.m4a",
  "assets/music/radio/Ente Ellam Ellam (M).m4a",
  "assets/music/radio/Cherathukal (From  Kumbalangi Nights ).m4a",
  "assets/music/radio/Azhalinte Aazhangalil (From  Ayalum Njanum Thammil ).m4a"
];

shuffleArray(musicTracks);

let musicIndex = 0;
let musicAudio = new Audio(musicTracks[musicIndex]);
musicAudio.volume = 0.7;
musicAudio.loop = false;

const musicBtn = document.getElementById("music-btn");
const musicVol = document.getElementById("music-vol");

musicBtn.addEventListener("click", () => {
  if (musicAudio.paused) {
    musicAudio.play();
    musicBtn.innerText = "⏸️ Pause";
  } else {
    musicAudio.pause();
    musicBtn.innerText = "▶️ Play";
  }
});

musicVol.addEventListener("input", (e) => {
  musicAudio.volume = parseFloat(e.target.value);
});

musicAudio.addEventListener("ended", () => {
  musicIndex = (musicIndex + 1) % musicTracks.length;
  musicAudio.src = musicTracks[musicIndex];
  musicAudio.play();
});

// ---------- RAIN ----------
const rainAudio = new Audio("assets/music/rain.mp3");
rainAudio.loop = true;
rainAudio.volume = 0.35;

const rainBtn = document.querySelector("#rain-box .play-btn");
const rainVol = document.querySelector("#rain-box .volume-slider");

// Cap max volume to 0.7
rainVol.max = 0.7;
rainVol.value = 0.35;

rainBtn.addEventListener("click", () => {
  if (rainAudio.paused) {
    rainAudio.play();
    rainBtn.innerText = "⏸️ Pause";
  } else {
    rainAudio.pause();
    rainBtn.innerText = "▶️ Play";
  }
});

rainVol.addEventListener("input", (e) => {
  rainAudio.volume = parseFloat(e.target.value);
});

// ---------- CROWD ----------
const crowdAudio = new Audio("assets/music/small crowd.mp3");
crowdAudio.loop = true;
crowdAudio.volume = 0.5;

const crowdBtn = document.querySelector("#crowd-box .play-btn");
const crowdVol = document.querySelector("#crowd-box .volume-slider");

crowdBtn.addEventListener("click", () => {
  if (crowdAudio.paused) {
    crowdAudio.play();
    crowdBtn.innerText = "⏸️ Pause";
  } else {
    crowdAudio.pause();
    crowdBtn.innerText = "▶️ Play";
  }
});

crowdVol.addEventListener("input", (e) => {
  crowdAudio.volume = parseFloat(e.target.value);
});
