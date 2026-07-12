const songs = [
  "Blinding Lights",
  "Good Days",
  "Levitating Remix",
  "Golden",
  "As It Was"
];

const playlist = document.querySelector("#playlist");

for (const song of songs) {
  const listItem = document.createElement("li");
  listItem.textContent = song;

  if (song.includes("Remix")) {
    listItem.textContent = song + " ⭐";
  }

  playlist.appendChild(listItem);
}