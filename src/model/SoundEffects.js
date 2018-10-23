export default function SoundEffects() {
  this._shotgun = new Audio("./soundEffects/shotgun.mp3")
  this._pistol = new Audio("./soundEffects/pistol.mp3")

  this._zombieBite1 = new Audio("./soundEffects/zombieBite1.mp3")
  this._zombieBite2 = new Audio("./soundEffects/zombieBite2.mp3")
  this._zombieBite3 = new Audio("./soundEffects/zombieBite3.mp3")

  this._gunShots = [this._shotgun, this._pistol]

  this._zombieSounds = [this._zombieBite1, this._zombieBite2, this._zombieBite3]
}

SoundEffects.prototype.gunShot = function() {
  var sound = this._gunShots[Math.floor(Math.random()*this._gunShots.length)];
  sound.currentTime = 0;
  sound.play();
}

SoundEffects.prototype.zombieBite = function() {
  var sound = this._zombieSounds[Math.floor(Math.random()*this._zombieSounds.length)];
  sound.currentTime = 0;
  sound.play();
}
