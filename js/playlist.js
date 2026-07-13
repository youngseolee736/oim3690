const songs = [
  "BIGBANG - BANG BANG BANG",
  "BIGBANG - FANTASTIC BABY Remix",
  "BIGBANG - HARU HARU",
  "G-DRAGON - CROOKED",
  "G-DRAGON - UNTITLED, 2014"
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
