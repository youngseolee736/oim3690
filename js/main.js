import { songs } from "./data.js";

const songList = document.querySelector("#song-list");

for (const song of songs) {
  const listItem = document.createElement("li");
  listItem.textContent = `${song.title} by ${song.artist}`;
  songList.appendChild(listItem);
}
