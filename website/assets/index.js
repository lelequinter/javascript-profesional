const video = document.querySelector("video");
const buttonPlay = document.getElementById("playButton");

function MediaPlayer(config) {
  this.video = config.el;
}

MediaPlayer.prototype.playPause = function () {
  this.video.paused ? this.video.play() : this.video.pause();
};

const player = new MediaPlayer({ el: video });
buttonPlay.onclick = () => {
  player.playPause();
};
