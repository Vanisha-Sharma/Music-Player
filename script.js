const songs = [
  {
    title: "Dynamite",
    artist: "BTS",
    cover: "https://i.scdn.co/image/ab67616d0000b27370426e24663b43f11ebd6c51",
    country: "South Korea",
    genre: "K-Pop",
    duration: "3:19",
    audio: "",
  },
  {
    title: "How You Like That",
    artist: "BLACKPINK",
    cover: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
    country: "South Korea",
    genre: "K-Pop",
    duration: "3:01",
    audio: "",
  },
  {
    title: "Love Scenario",
    artist: "iKON",
    cover: "https://i.scdn.co/image/ab67616d0000b2734c2fcea217112b13312f8fb2",
    country: "South Korea",
    genre: "K-HipHop",
    duration: "3:29",
    audio: "",
  },
  {
    title: "Gangnam Style",
    artist: "PSY",
    cover: "https://i.scdn.co/image/ab67616d0000b27382dd2427e6d302711b1e9615",
    country: "South Korea",
    genre: "K-Pop",
    duration: "3:39",
    audio: "",
  },

  // Indian Songs
  {
    title: "Kesariya",
    artist: "Arijit Singh",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a1",
    country: "India",
    genre: "Bollywood",
    duration: "4:28",
    audio: "",
  },
  {
    title: "Naatu Naatu",
    artist: "Rahul Sipligunj, Kaala Bhairava",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a2",
    country: "India",
    genre: "Telugu",
    duration: "3:36",
    audio: "",
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a3",
    country: "India",
    genre: "Bollywood",
    duration: "4:22",
    audio: "",
  },
  {
    title: "Why This Kolaveri Di",
    artist: "Dhanush",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a4",
    country: "India",
    genre: "Tamil",
    duration: "4:19",
    audio: "",
  },

  // American Songs
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d0000b273e2d156fdc691f57900134342",
    country: "USA",
    genre: "Pop",
    duration: "3:20",
    audio: "",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
    country: "USA",
    genre: "Pop",
    duration: "3:23",
    audio: "",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    cover: "https://i.scdn.co/image/ab67616d0000b273604f1c6c6e5a1d874e3a9113",
    country: "USA",
    genre: "Pop",
    duration: "2:21",
    audio: "",
  },
  {
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    cover: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
    country: "USA",
    genre: "Pop Rock",
    duration: "2:58",
    audio: "",
  },
  {
    title: "Savage",
    artist: "Megan Thee Stallion",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a5",
    country: "USA",
    genre: "Hip-Hop",
    duration: "2:35",
    audio: "",
  },
  {
    title: "Old Town Road",
    artist: "Lil Nas X",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a6",
    country: "USA",
    genre: "Country Rap",
    duration: "1:53",
    audio: "",
  },
  {
    title: "Don't Start Now",
    artist: "Dua Lipa",
    cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
    country: "USA",
    genre: "Disco Pop",
    duration: "3:03",
    audio: "",
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    cover: "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
    country: "USA",
    genre: "Pop",
    duration: "2:54",
    audio: "",
  },
  {
    title: "Circles",
    artist: "Post Malone",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a7",
    country: "USA",
    genre: "Pop Rock",
    duration: "3:35",
    audio: "",
  },
  {
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a8",
    country: "USA",
    genre: "Pop Rap",
    duration: "2:38",
    audio: "",
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a1a7c4a6a9a5b8a1a5b8a9",
    country: "USA",
    genre: "Electropop",
    duration: "3:14",
    audio: "",
  },
];

const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const songCountry = document.querySelector(".song-country");
const songGenre = document.querySelector(".song-genre");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");
const playBtn = document.querySelector(".play-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const volumeSlider = document.querySelector(".volume-slider");
const searchInput = document.querySelector(".search-input");
const songList = document.querySelector(".song-list");
const songCount = document.querySelector(".song-count");

let songIndex = 0;
let filteredSongs = [...songs];

function initPlayer() {
  loadSong(songs[songIndex]);
  renderSongList();
  updateSongCount();
}

function loadSong(song) {
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  cover.src = song.cover;
  songCountry.textContent = song.country;
  songGenre.textContent = song.genre;
  durationEl.textContent = song.duration;
  audio.src = song.audio;
}

function renderSongList() {
  songList.innerHTML = "";

  if (filteredSongs.length === 0) {
    songList.innerHTML =
      '<div class="no-results">No songs found matching your search</div>';
    return;
  }

  filteredSongs.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.classList.add("song-item");
    if (index === songIndex && songs[songIndex].title === song.title) {
      songItem.classList.add("active");
    }

    songItem.innerHTML = `
                    <img src="${song.cover}" alt="${song.title}" class="song-item-cover">
                    <div class="song-item-info">
                        <p class="song-item-title">${song.title}</p>
                        <p class="song-item-artist">${song.artist}</p>
                    </div>
                    <span class="song-item-duration">${song.duration}</span>
                `;

    songItem.addEventListener("click", () => {
      songIndex = songs.findIndex((s) => s.title === song.title);
      loadSong(filteredSongs[index]);
      renderSongList();
    });

    songList.appendChild(songItem);
  });
}

function updateSongCount() {
  songCount.textContent = `${filteredSongs.length} songs`;
}

function searchSongs() {
  const searchTerm = searchInput.value.toLowerCase();
  filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm) ||
      song.country.toLowerCase().includes(searchTerm) ||
      song.genre.toLowerCase().includes(searchTerm)
  );

  if (!filteredSongs.some((song) => song.title === songs[songIndex].title)) {
    songIndex = 0;
    if (filteredSongs.length > 0) {
      loadSong(filteredSongs[songIndex]);
    }
  }

  renderSongList();
  updateSongCount();
}

function playSong() {
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = filteredSongs.length - 1;
  }
  loadSong(filteredSongs[songIndex]);
  renderSongList();
}

function nextSong() {
  songIndex++;
  if (songIndex > filteredSongs.length - 1) {
    songIndex = 0;
  }
  loadSong(filteredSongs[songIndex]);
  renderSongList();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;

  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function setVolume() {
  audio.volume = this.value;
}

playBtn.addEventListener("click", () => {
  const isPlaying = playBtn.querySelector("i").classList.contains("fa-play");
  if (isPlaying) {
    playSong();
    audio.play();
  } else {
    pauseSong();
    audio.pause();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgress);
volumeSlider.addEventListener("input", setVolume);
searchInput.addEventListener("input", searchSongs);

initPlayer();
