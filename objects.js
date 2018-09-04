var playlist = { a: "Abc"};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistNAme) {
  delete playlist[artistName]
}