// ---------- SHUFFLE UTILITY ----------
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ---------- QAWALI TRACKS ----------
const qawaliTracks = [
  "assets/music/qawali/Balaghal-Ula Bi-Kamaalihi.m4a",
  "assets/music/qawali/Bismillah.m4a",
  "assets/music/qawali/Dilshad.m4a",
  "assets/music/qawali/Is Karam Ka Karon Shukar Kaise Ada.m4a",
  "assets/music/qawali/Khwaja Mere Khwaja.m4a",
  "assets/music/qawali/Kun Faya Kun.m4a",
  "assets/music/qawali/Lamyati_Nazeero_Kafi_Nazarin_feat_Danish_Ahmed,_Wajahat_Ali,_J.m4a",
  "assets/music/qawali/Maula Mere Maula.m4a",
  "assets/music/qawali/Tajdare Haram (Complete Version).m4a",
  "assets/music/qawali/YE TUNE KYA KIYA.m4a"

];

shuffleArray(qawaliTracks);

let qawaliIndex = 0;
let qawaliAudio = new Audio(qawaliTracks[qawaliIndex]);
qawaliAudio.volume = 0.7;
qawaliAudio.loop = false;

const qawaliBtn = document.querySelector("#qawali-box .play-btn");
const qawaliVol = document.querySelector("#qawali-box .volume-slider");
const nowPlaying = document.getElementById("now-playing");

// Play/Pause Qawali
qawaliBtn.addEventListener("click", () => {
  if (qawaliAudio.paused) {
    qawaliAudio.play();
    qawaliBtn.innerText = "⏸️ Pause";
    nowPlaying.innerText = `Now Playing: Song ${qawaliIndex + 1}`;
  } else {
    qawaliAudio.pause();
    qawaliBtn.innerText = "▶️ Play";
    nowPlaying.innerText = "";
  }
});

// On volume change
qawaliVol.addEventListener("input", (e) => {
  qawaliAudio.volume = parseFloat(e.target.value);
});

// On track end -> play next
qawaliAudio.addEventListener("ended", () => {
  qawaliIndex = (qawaliIndex + 1) % qawaliTracks.length;
  qawaliAudio.src = qawaliTracks[qawaliIndex];
  qawaliAudio.play();
  nowPlaying.innerText = `Now Playing: Song ${qawaliIndex + 1}`;
});

// ---------- CROWD AUDIO ----------
const crowdAudio = new Audio("assets/music/small crowd.mp3");
crowdAudio.loop = true;
crowdAudio.volume = 0.75; // Louder than in Chaayakada

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
