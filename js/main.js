import { songs } from "./data.js";

const songList = document.querySelector("#song-list");
const intro = document.querySelector("#intro");

intro.textContent = `${songs.length} BIGBANG and G-DRAGON favorites from 2008–2017.`;

for (const song of songs) {
  const card = document.createElement("article");
  card.classList.add("song-card");

  const title = document.createElement("h2");
  title.textContent = song.title;

  const artist = document.createElement("p");
  artist.classList.add("artist");
  artist.textContent = song.artist;

  const release = document.createElement("p");
  release.classList.add("details");
  release.textContent = `${song.album} • ${song.year}`;

  const mood = document.createElement("p");
  mood.classList.add("details");
  mood.textContent = song.mood;

  card.append(title, artist, release, mood);
  songList.appendChild(card);
}
