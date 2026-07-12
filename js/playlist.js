const songs = [
  "Blinding Lights",
  "Good Days",
  "Levitating Remix",
  "Golden",
  "As It Was"
];

const playlist = document.querySelector("#playlist");
const songForm = document.querySelector("#song-form");
const songTitleInput = document.querySelector("#song-title");

function renderPlaylist() {
  playlist.replaceChildren();

  for (const song of songs) {
    const listItem = document.createElement("li");
    listItem.textContent = song;

    if (song.includes("Remix")) {
      listItem.textContent = song + " ⭐";
    }

    playlist.appendChild(listItem);
  }
}

songForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newSong = songTitleInput.value.trim();

  if (newSong === "") {
    return;
  }

  songs.push(newSong);
  renderPlaylist();
  songForm.reset();
  songTitleInput.focus();
});

renderPlaylist();
