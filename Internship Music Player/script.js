const songs = [
  {
    name: "Kalank (Title Track)",
    src: "songs/kalank.mp3"
  },
  {
    name: "Sapphire - ED SHEERAN",
    src: "songs/sapphire.mp3"
  },
  {
    name: "Funk Song - Kidjaywest & Talwinder",
    src: "songs/funk-song.mp3"
  },
  {
    name: "Blinding Lights – The Weeknd",
    src: "songs/blinding-lights.mp3"
  }
];

let currentSong = 0;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

function loadSong(song) {
  title.innerText = song.name;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playBtn.innerText = '⏸️';
}

function pauseSong() {
  audio.pause();
  playBtn.innerText = '▶️';
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
}

playBtn.addEventListener('click', () => {
  if (audio.paused) playSong();
  else pauseSong();
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audio.addEventListener('timeupdate', () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

loadSong(songs[currentSong]);
