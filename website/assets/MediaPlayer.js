function MediaPlayer(config) {
  this.video = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.video.play();
};

MediaPlayer.prototype.pause = function () {
  this.video.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  this.video.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.mute = function () {
  this.video.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.video.muted = false;
};

MediaPlayer.prototype.toggleMute = function () {
  this.video.muted ? (this.video.muted = false) : (this.video.muted = true);
  // console.log('Muteo:: ', this.video.muted)
};

export default MediaPlayer;
