import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new Autoplay()] });

const buttonPlay = document.getElementById("playButton");
buttonPlay.onclick = () => {
  player.togglePlay();
};

const buttonMute = document.getElementById('muteButton');
buttonMute.onclick = () => {
  player.toggleMute();
}