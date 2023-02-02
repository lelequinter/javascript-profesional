import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const buttonPlay = document.getElementById("playButton");
buttonPlay.onclick = () => {
  player.playPause();
};
