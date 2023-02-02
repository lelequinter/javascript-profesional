
function MediaPlayer(config) {
  this.video = config.el;
}

MediaPlayer.prototype.playPause = function () {
  this.video.paused ? this.video.play() : this.video.pause();
};

export default MediaPlayer;
